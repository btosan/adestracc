export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, ok, err } from '@/lib/api-helpers'

export async function GET() {
  return ok(await prisma.impactStat.findMany())
}

export async function POST(req: NextRequest) {
  const guard = await requireAdmin(); if (guard) return guard
  const { label, value, description, icon } = await req.json()
  if (!label || !value) return err('label and value are required')
  return ok(await prisma.impactStat.create({ data: { label, value, description, icon } }), 201)
}
