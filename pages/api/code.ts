import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filepath } = req.query
  const filepathStr = filepath as string

  // production
  if (process.env.NODE_ENV === "production") {
    try {
      const fileUrl = `https://api.github.com/repos/kiko-g/bagger-ui/contents/components/${encodeURIComponent(
        filepathStr,
      )}`
      const response = await axios.get(fileUrl)
      const content = Buffer.from(response.data.content, "base64").toString("utf8") // decode base64 content
      return res.status(200).send(content) // return the code from the file
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: "Error reading file" })
    }
  }
  // development
  else {
    try {
      if (filepathStr.includes("..")) {
        // prevent accessing files outside of the 'components' directory
        return res.status(400).send("Invalid filepath")
      }

      const basePath = path.join(process.cwd(), "components")
      const filePath = path.join(basePath, filepathStr)

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "File not found" })
      }

      const fileContent = fs.readFileSync(filePath, "utf8")
      return res.status(200).send(fileContent)
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: "Error reading file" })
    }
  }
}
