// pages/api/tugas/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { isi, nama } = req.body;
    const { id } = req.query ;


    // Create the TugasMurid
    const newTugasMurid = prisma.tugasMurid.create({
      data: {
        isi: isi,
        namaUser: nama,
        idTugas: id as string,
      },
    })

    res.status(201).json(newTugasMurid);
  } catch (error) {
    console.error('Error creating TugasMurid:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
