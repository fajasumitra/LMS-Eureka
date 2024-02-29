
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    // Ensure id is provided
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Bad Request - Invalid Materi ID' });
    }

    const materi = await prisma.materi.delete({
      where: { id: String(id) },
    });

    // Check if Materi with the given ID exists
    if (!materi) {
      return res.status(404).json({ error: 'Materi not found' });
    }

    res.status(200).json(materi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
