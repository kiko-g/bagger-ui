import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // production
  if (process.env.NODE_ENV === "production") {
    try {
      const fileUrl = `https://api.github.com/repos/kiko-g/bagger-ui/contents/tailwind.config.js`
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
      const filePath = path.join(process.cwd(), "tailwind.config.js")

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
