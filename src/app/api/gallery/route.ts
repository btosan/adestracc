export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok, err } from '@/lib/api-helpers'

export async function GET() {
  const items = await prisma.galleryImage.findMany({ orderBy: { createdAt: 'desc' } })
  return ok(items)
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin(); if (guard) return guard
  const body = await req.json()
  const { title, imageUrl, category, description } = body
  if (!title || !imageUrl || !category) return err('title, imageUrl and category are required')
  const item = await prisma.galleryImage.create({ data: { title, imageUrl, category, description } })
  return ok(item, 201)
}
