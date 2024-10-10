import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    try {
      const fileUrl = `https://api.github.com/repos/kiko-g/bagger-ui/contents/tailwind.config.ts`
      const response = await axios.get(fileUrl)
      const content = Buffer.from(response.data.content, 'base64').toString('utf8') // decode base64 content
      return new NextResponse(content, { status: 200 }) // return the code from the file
    } catch (e) {
      console.error(e)
      return NextResponse.json({ message: 'Error reading file' }, { status: 500 })
    }
  } else {
    try {
      const filePath = path.join(process.cwd(), 'tailwind.config.ts')

      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ message: 'File not found' }, { status: 404 })
      }

      const fileContent = fs.readFileSync(filePath, 'utf8')
      return new NextResponse(fileContent, { status: 200 })
    } catch (e) {
      console.error(e)
      return NextResponse.json({ message: 'Error reading file' }, { status: 500 })
    }
  }
}
