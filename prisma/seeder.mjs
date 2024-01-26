// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedMateri = async () => {
  // Seeding logic for Materi model
  const materiData = Array.from({ length: 10 }).map((_, index) => ({
    mataPelajaran: `Subject ${index + 1}`,
    materi: `Content for subject ${index + 1}`,
    judul: `Title ${index + 1}`,
    isi: `Description for subject ${index + 1}`,
    namaUser: `User${index + 1}`,
  }));

  await prisma.materi.createMany({
    data: materiData,
  });
};

const seedTugas = async () => {
  // Seeding logic for Tugas model
  const tugasData = Array.from({ length: 10 }).map((_, index) => ({
    mataPelajaran: `Subject ${index + 1}`,
    materi: `Content for subject ${index + 1}`,
    judul: `Title ${index + 1}`,
    isi: `Description for subject ${index + 1}`,
    tanggalPengumpulan: new Date(),
    namaUser: `User${index + 1}`,
  }));

  await prisma.tugas.createMany({
    data: tugasData,
  });
};

const seedTugasMurid = async () => {
  // Seeding logic for TugasMurid model
  const tugasMuridData = Array.from({ length: 10 }).map((_, index) => ({
    mataPelajaran: `Subject ${index + 1}`,
    materi: `Content for subject ${index + 1}`,
    judul: `Title ${index + 1}`,
    isi: `Description for subject ${index + 1}`,
    gambar: Buffer.from('base64_encoded_image_data'),
    namaUser: `User${index + 1}`,
    nilai: Math.floor(Math.random() * 101),
    idTugas: `TugasID${index + 1}`,
  }));

  // Assuming 'idTugas' is a valid 'id' from the 'Tugas' model
  const tugasIds = await prisma.tugas.findMany({ select: { id: true } });
  
  await prisma.tugasMurid.createMany({
    data: tugasMuridData.map((data, index) => ({
      ...data,
      idTugas: tugasIds[index].id,
    })),
  });
};

const seedAll = async () => {
  try {
    await seedMateri();
    await seedTugas();
    await seedTugasMurid();
  } catch (error) {
    throw error;
  }
};

seedAll();