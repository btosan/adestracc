export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok, err } from '@/lib/api-helpers'

export async function GET() {
  const items = await prisma.videoItem.findMany({ orderBy: { createdAt: 'desc' } })
  return ok(items)
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin(); if (guard) return guard
  const body = await req.json()
  const { title, videoUrl, description, thumbnail } = body
  if (!title || !videoUrl) return err('title and videoUrl are required')
  const item = await prisma.videoItem.create({ data: { title, videoUrl, description, thumbnail } })
  return ok(item, 201)
}
