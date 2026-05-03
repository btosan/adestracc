export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok, err } from '@/lib/api-helpers'

export async function GET() {
  const guard = await requireAdmin(); if (guard) return guard
  return ok(await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } }))
}

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()
  if (!name || !email || !subject || !message) return err('All fields required')
  return ok(await prisma.contactMessage.create({ data: { name, email, subject, message } }), 201)
}
