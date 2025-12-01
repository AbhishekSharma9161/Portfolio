import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostFrontmatter, blogPostFrontmatterSchema } from '@/src/schemas/blog'
import { BlogPostWithContent } from '@/src/types'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPostWithContent[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Validate frontmatter
      const validatedData = blogPostFrontmatterSchema.parse(data)

      return {
        slug,
        content,
        ...validatedData,
        readingTime: calculateReadingTime(content),
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getBlogPostBySlug(slug: string): BlogPostWithContent | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Validate frontmatter
    const validatedData = blogPostFrontmatterSchema.parse(data)

    return {
      slug,
      content,
      ...validatedData,
      readingTime: calculateReadingTime(content),
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}