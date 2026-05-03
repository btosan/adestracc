export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, secretKey } = await req.json();

    const adminSecret = process.env.ADMIN_REGISTRATION_SECRET;
    if (!adminSecret || secretKey !== adminSecret) {
      return NextResponse.json({ error: 'Invalid admin secret key.' }, { status: 403 });
    }
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email and password are required.' }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 12);
    await prisma.user.create({ data: { name, email, password: hashed, role: 'ADMIN' } });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Register error:', err);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}