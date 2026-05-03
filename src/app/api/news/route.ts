export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok, err } from '@/lib/api-helpers'

export async function GET() {
  const items = await prisma.newsArticle.findMany({ orderBy: { publishedAt: 'desc' } })
  return ok(items)
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin(); if (guard) return guard
  const body = await req.json()
  const { title, excerpt, content, imageUrl, publishedAt } = body
  if (!title || !excerpt || !content) return err('title, excerpt and content are required')
  const item = await prisma.newsArticle.create({
    data: { title, excerpt, content, imageUrl, publishedAt: publishedAt ? new Date(publishedAt) : undefined },
  })
  return ok(item, 201)
}
