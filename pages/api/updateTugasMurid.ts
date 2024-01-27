import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { id } = req.query;
    const { nilaiBaru, komentar } = req.body;

    // Update the TugasMurid
    const updatedTugasMurid = await prisma.tugasMurid.update({
      where: {
        id: id as string,
      },
      data: {
        nilai : nilaiBaru,
        komentar : komentar,
      },
    })

    res.status(200).json(updatedTugasMurid);
  } catch (error) {
    console.error('Error updating TugasMurid:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}