import { NextApiRequest, NextApiResponse } from 'next';
import { Storage } from '@google-cloud/storage';
import prisma from '../../prisma/prisma';
import multer from 'multer';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Set up Google Cloud Storage
const storage = new Storage({
  projectId: "capstone-project-404600",
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

  // Call the upload middleware to handle the file upload
  upload(req as any, res as any, async function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ error: 'File Upload Error' });
    }

    try {
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

      stream.on('finish', async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

        // Access other form fields from req.body
        const { judul, materi, nama, isi, mataPelajaran } = req.body;

        const newTask = await prisma.materi.create({
          data: {
            mataPelajaran: mataPelajaran as string,
            judul: judul as string,
            materi: materi as string,
            namaUser: nama as string, 
            isi: isi as string,
            filePath: fileName,
          },
        });

        console.log(newTask);

        res.status(201).json({ ...newTask, fileUrl: publicUrl });
      });

      stream.end(uploadedFile.buffer);
    } catch (error) {
      console.error('Error creating Materi:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  });
}
