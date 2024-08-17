import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import axios from "axios"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const filepath = searchParams.get("filepath")

  if (!filepath) {
    return NextResponse.json({ message: "Filepath parameter is missing" }, { status: 400 })
  }

  const filepathStr = filepath as string
  if (process.env.NODE_ENV === "production") {
    try {
      const fileUrl = `https://api.github.com/repos/kiko-g/bagger-ui/contents/src/components/${encodeURIComponent(
        filepathStr
      )}`
      const response = await axios.get(fileUrl)
      const content = Buffer.from(response.data.content, "base64").toString("utf8") // decode base64 content
      return new NextResponse(content, { status: 200 }) // return the content of the file
    } catch (e) {
      console.error(e)
      return NextResponse.json({ message: "Error reading file" }, { status: 500 })
    }
  } else {
    try {
      if (filepathStr.includes("..")) {
        return new NextResponse("Invalid filepath", { status: 400 }) // prevent accessing files outside of the 'components' directory
      }

      const basePath = path.join(process.cwd(), "src/components")
      const filePath = path.join(basePath, filepathStr)

      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ message: "File not found" }, { status: 404 })
      }

      const fileContent = fs.readFileSync(filePath, "utf8")
      const fileStartKey = `"use client"\n`
      const sanitizedContent = fileContent.startsWith(``)
        ? fileContent.replace(fileStartKey, "").trimStart()
        : fileContent

      return new NextResponse(sanitizedContent, { status: 200 })
    } catch (e) {
      console.error(e)
      return NextResponse.json({ message: "Error reading file" }, { status: 500 })
    }
  }
}
