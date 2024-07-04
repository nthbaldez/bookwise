import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const books = await prisma.book.findMany()
    return books
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Algo deu errado, veja os logs' })
  }
}
