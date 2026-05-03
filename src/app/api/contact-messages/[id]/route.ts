export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok } from '@/lib/api-helpers'

export async function PATCH(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  return ok(await prisma.contactMessage.update({ where: { id }, data: { read: true } }))
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  await prisma.contactMessage.delete({ where: { id } })
  return ok({ deleted: true })
}
