export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok } from '@/lib/api-helpers'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  const item = await prisma.videoItem.update({ where: { id }, data: await req.json() })
  return ok(item)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  await prisma.videoItem.delete({ where: { id } })
  return ok({ deleted: true })
}
