import { z } from 'zod'

export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  published: z.boolean().default(false),
  publishedAt: z.date().optional(),
  tags: z.array(z.string()).default([]),
})

export const blogPostFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
  author: z.string().optional(),
  image: z.string().optional(),
})

export type BlogPost = z.infer<typeof blogPostSchema>
export type BlogPostFrontmatter = z.infer<typeof blogPostFrontmatterSchema>