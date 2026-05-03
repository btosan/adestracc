export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok, err } from '@/lib/api-helpers'

export async function GET() {
  return ok(await prisma.partner.findMany())
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin(); if (guard) return guard
  const { name, logoUrl, website } = await req.json()
  if (!name) return err('name is required')
  return ok(await prisma.partner.create({ data: { name, logoUrl, website } }), 201)
}
