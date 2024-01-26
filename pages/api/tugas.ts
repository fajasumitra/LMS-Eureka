// pages/api/tugas/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tugasList = await prisma.tugas.findMany();
    res.status(200).json(tugasList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
