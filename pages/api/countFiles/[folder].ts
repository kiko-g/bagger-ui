import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"
import axios from "axios"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query

  // production
  if (process.env.NODE_ENV === "production") {
    const folderStr = folder as string
    const fileUrl = `https://api.github.com/repos/kiko-g/bagger-ui/contents/components/${encodeURIComponent(folderStr)}`

    axios
      .get(fileUrl)
      .then((response) => {
        const files = response.data.filter((file: any) => file.name !== "index.ts")
        res.status(200).json({ count: files.length })
      })
      .catch((error) => {
        res.status(500).json({ isError: true, message: error.message, count: -1 })
      })
  }
  // development
  else {
    const filepath = `components/${folder}`
    const directoryPath = path.join(process.cwd(), filepath)

    fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, filenames: string[]) => {
      if (err) {
        return res.status(500).json({ isError: true, message: err.message, count: -1 })
      }

      const filteredFilenames = filenames.filter((filename: any) => filename !== "index.ts")
      return res.status(200).json({ count: filteredFilenames.length })
    })
  }
}
