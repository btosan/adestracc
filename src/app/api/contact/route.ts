export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()
    if (!name || !email || !subject || !message)
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    await prisma.contactMessage.create({ data: { name, email, subject, message: phone ? `[Phone: ${phone}]\n\n${message}` : message } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
