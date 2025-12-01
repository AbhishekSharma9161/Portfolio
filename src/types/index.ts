export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'other'
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  current: boolean
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  image?: string
  rating: number
}

export interface BlogPostMeta {
  title: string
  date: string
  excerpt?: string
  tags: string[]
  published: boolean
  author?: string
  image?: string
  readingTime?: number
}

export interface BlogPostWithContent extends BlogPostMeta {
  slug: string
  content: string
}

export interface ContactMessage {
  name: string
  email: string
  subject?: string
  message: string
}