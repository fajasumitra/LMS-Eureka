import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/prisma';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// bodyParser off
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

  // Call the upload middleware to handle the file upload
  upload(req as any, res as any, async function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ error: 'File Upload Error' });
    }

    try {
      // Access the uploaded file details from req.file
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'File not uploaded' });
      }

      // get file path
      console.log(file.path);

      const fileName = path.basename(file.path.replace(/\\/g, '/'));

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

      res.status(201).json(newTask);
    } catch (error) {
      console.error('Error creating Materi:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  });
}