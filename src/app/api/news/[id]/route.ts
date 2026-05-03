export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok } from '@/lib/api-helpers'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  const body = await req.json()
  if (body.publishedAt) body.publishedAt = new Date(body.publishedAt)
  const item = await prisma.newsArticle.update({ where: { id }, data: body })
  return ok(item)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  await prisma.newsArticle.delete({ where: { id } })
  return ok({ deleted: true })
}
