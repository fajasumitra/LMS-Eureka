// pages/api/tugas/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join ("public");

    // Create the "saved" directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage }).single("file");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  upload(req as any, res as any, async function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ error: 'File Upload Error' });
    }
    try {
      const file = req.file;
      const { isi, name } = req.body;
      const { id } = req.query ;

      if (!file) {
        return res.status(400).json({ error: 'File not uploaded' });
      }

      const fileName = path.basename(file.path.replace(/\\/g, '/'));

      const newTugasMurid = await prisma.tugasMurid.create({
        data: {
          isi: isi,
          namaUser: name,
          idTugas: id as string,
          filePath: fileName,
        },
      })

      console.log(newTugasMurid);

      res.status(201).json(newTugasMurid);
    } catch (error) {
      console.error('Error creating TugasMurid:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  })
}
