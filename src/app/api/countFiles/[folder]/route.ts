import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const folder = searchParams.get('folder')

  if (!folder) {
    return NextResponse.json({ isError: true, message: 'Folder parameter is missing', count: -1 }, { status: 400 })
  }

  if (process.env.NODE_ENV === 'production') {
    try {
      const fileUrl = `https://api.github.com/repos/kiko-g/bagger-ui/contents/components/${encodeURIComponent(folder)}`
      const response = await axios.get(fileUrl)
      const files = response.data.filter((file: any) => file.name !== 'index.ts')
      return NextResponse.json({ count: files.length }, { status: 200 })
    } catch (error: any) {
      return NextResponse.json({ isError: true, message: error.message, count: -1 }, { status: 500 })
    }
  } else {
    const filepath = `components/${folder}`
    const directoryPath = path.join(process.cwd(), filepath)

    try {
      const filenames = fs.readdirSync(directoryPath)
      const filteredFilenames = filenames.filter((filename: any) => filename !== 'index.ts')
      return NextResponse.json({ count: filteredFilenames.length }, { status: 200 })
    } catch (err: any) {
      return NextResponse.json({ isError: true, message: err.message, count: -1 }, { status: 500 })
    }
  }
}
