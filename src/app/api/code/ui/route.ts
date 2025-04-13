import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import axios from "axios"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const filepath = searchParams.get("filepath")
  const folderPath = "src/components"
  const githubApiFileUrl = process.env.GITHUB_API_FILE_URL

  if (!filepath) {
    return NextResponse.json({ message: "Filepath parameter is missing" }, { status: 400 })
  }

  const filepathStr = filepath as string
  if (process.env.NODE_ENV === "production") {
    try {
      const fileUrl = `${githubApiFileUrl}/${folderPath}/${encodeURIComponent(filepathStr)}`
      const response = await axios.get(fileUrl)
      const fileContent = Buffer.from(response.data.content, "base64").toString("utf8") // decode base64 content
      return new NextResponse(sanitizeContent(fileContent), { status: 200 }) // return the content of the file
    } catch (e) {
      console.error(e)
      return NextResponse.json({ message: "Error reading file" }, { status: 500 })
    }
  } else {
    try {
      if (filepathStr.includes("..")) {
        return new NextResponse("Invalid filepath", { status: 400 }) // prevent accessing files outside of the 'components' directory
      }

      const basePath = path.join(process.cwd(), folderPath)
      const filePath = path.join(basePath, filepathStr)

      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ message: "File not found" }, { status: 404 })
      }

      const fileContent = fs.readFileSync(filePath, "utf8")
      return new NextResponse(sanitizeContent(fileContent), { status: 200 })
    } catch (e) {
      console.error(e)
      return NextResponse.json({ message: "Error reading file" }, { status: 500 })
    }
  }
}

function sanitizeContent(content: string) {
  const clientServerRegex = /^(['"]use (client|server)['"]\s*;?\s*\n?)/i
  return content.replace(clientServerRegex, "").trimStart()
}
