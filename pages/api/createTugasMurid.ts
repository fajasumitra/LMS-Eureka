// pages/api/tugas/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/client';
import multer from 'multer';
import path from 'path';
import { Storage } from '@google-cloud/storage';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

// Set up Google Cloud Storage
const storage = new Storage({
  projectId: "capstone-project-404600",
  keyFilename: "./prisma/capstone-project-404600-d694c5c407a6.json",
});
const bucket = storage.bucket("portofku");

// Multer settings
const multerStorage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb limit
  },
});

// Multer middleware
const upload = multerStorage.single('file');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await new Promise<void>((resolve, reject) => {
      upload(req as any, res as any, (err: any) => {
        if (err) {
          console.error('Error uploading file:', err);
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const { isi, name } = req.body;
    const { id } = req.query;

    const uploadedFile = req.file as Express.Multer.File & { buffer?: Buffer };

    if (!uploadedFile) {
      return res.status(400).json({ error: 'File not uploaded' });
    }

    const ext = path.extname(uploadedFile.originalname);
    const fileName = `${Date.now()}${ext}`;
    const file = bucket.file(fileName);
    const stream = file.createWriteStream({
      resumable: false,
    });

    console.log('isi:', fileName);

    stream.on('finish', async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

      const newTugasMurid = await prisma.tugasMurid.create({
        data: {
          isi: isi as string,
          namaUser: name as string,
          idTugas: id as string,
          filePath: fileName,
        },
      });

      console.log(newTugasMurid);

      res.status(201).json(newTugasMurid);
    });
    stream.end(uploadedFile.buffer);
  } catch (error) {
    console.error('Error creating TugasMurid:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
