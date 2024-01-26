// pages/api/tugas/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { judul, materi, tenggat, nama, isi, mataPelajaran } = req.body;

    const newTask = await prisma.tugas.create({
      data: {
        mataPelajaran: mataPelajaran as string,
        judul: judul as string,
        materi: materi as string,
        tanggalPengumpulan : new Date(tenggat),
        namaUser: nama as string,
        isi: isi as string,
      },
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating Tugas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
