// pages/api/tugas/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  try {
    const tugasMuridList = await prisma.tugasMurid.findMany({
      where: {
        idTugas: id as string, // Assuming idasli is a string, adjust if needed
      },
    });
    
    res.status(200).json(tugasMuridList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
