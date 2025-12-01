import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/src/schemas/contact'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body)
    
    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject || 'Contact Form Submission',
        message: validatedData.message,
      },
    })
    
    // Here you could also send an email notification
    // await sendContactEmail(validatedData)
    
    return NextResponse.json(
      { message: 'Message sent successfully', id: contact.id },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}