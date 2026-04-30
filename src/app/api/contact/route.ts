import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would save to database via Prisma:
    // const prisma = new PrismaClient()
    // await prisma.contactMessage.create({ data: { name, email, phone, subject, message } })

    console.log('Contact form submission:', { name, email, phone, subject, message });

    return NextResponse.json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
