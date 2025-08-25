import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { path, secret } = await request.json()
    
    // Verify secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }
    
    // Revalidate the path
    revalidatePath(path)
    
    return NextResponse.json({ 
      message: `Path ${path} revalidated successfully`,
      revalidated: true,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}