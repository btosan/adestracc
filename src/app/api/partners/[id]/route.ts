export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok } from '@/lib/api-helpers'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  return ok(await prisma.partner.update({ where: { id }, data: await req.json() }))
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin(); if (guard) return guard
  const { id } = await params
  await prisma.partner.delete({ where: { id } })
  return ok({ deleted: true })
}
