import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function requireAdmin() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}

export function ok(data: unknown, status = 200) {
  return NextResponse.json(data, { status })
}

export function err(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}
