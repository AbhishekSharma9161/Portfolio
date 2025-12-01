import { NextRequest, NextResponse } from 'next/server'
import { getBlogPostBySlug } from '@/lib/mdx'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = getBlogPostBySlug(params.slug)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ post })
  } catch (error) {
    console.error('Blog post API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}