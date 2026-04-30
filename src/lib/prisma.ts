// Prisma client singleton - generates after: npx prisma generate
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let prisma: any;

if (typeof window === 'undefined') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require('@prisma/client');
    const g = globalThis as { _prisma?: typeof PrismaClient };
    prisma = g._prisma ?? new PrismaClient({ log: process.env.NODE_ENV === 'development' ? ['error'] : ['error'] });
    if (process.env.NODE_ENV !== 'production') g._prisma = prisma;
  } catch {
    console.warn('Prisma client not generated yet. Run: npx prisma generate');
  }
}

export { prisma };
