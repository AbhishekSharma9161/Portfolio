import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/mdx'

export async function GET() {
  try {
    const posts = getAllBlogPosts()
    
    return NextResponse.json({
      posts: posts.map(post => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        tags: post.tags,
        author: post.author,
        image: post.image,
        readingTime: post.readingTime,
      }))
    })
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}