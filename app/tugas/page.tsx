"use client";

import React, { useEffect, useState } from 'react';
import CardTugas from '../../components/cardTugas';
import NavigationMenu from '@/components/navigationMenu';
import Tambah from '@/components/tambah';

interface TugasData {
  id: string;
  judul: string;
  isi: string;
  tanggalPengumpulan: Date;
  namaUser: string;
}

export default function Index() {
  const [nama, setNama] = useState('');
  const [tugasList, setTugasList] = useState<TugasData[]>([]);
  const [isStoredGuru, setIsStoredGuru] = useState(''
  );

  useEffect(() => {
    const storedNama = localStorage.getItem('nama');
    const storedGuru = localStorage.getItem('isGuruMode');
    if (storedNama) {
      setNama(storedNama);
    }
    if (storedGuru) {
      setIsStoredGuru(storedGuru);
    }

    // Fetch Tugas data from your Next.js TypeScript API route
    fetch('/api/tugas')
      .then((response) => response.json())
      .then((tugas: TugasData[]) => setTugasList(tugas))
      .catch((error) => console.error('Error fetching tugas:', error));
  }, []);

  return (
    <>
    <div className='w-screen min-h-screen bg-[#97C17E]'>
      <div className='flex'>
        <NavigationMenu />
        <div className='ml-28 mt-10'>
          <p className='text-3xl font-semibold'>{nama}</p>
          <p className='text-2xl mt-1'>Selamat datang di Portofku!</p>
          <div className='w-full h-1 bg-[#39576C] mt-1'/>
          <p className='text-3xl font-semibold mt-5'>Tugas</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mx-auto w-[90%] mt-10">
        {tugasList.map((tugas) => (
          <CardTugas
            key={tugas.id}
            id={tugas.id}
            judul={tugas.judul}
            namaUser={tugas.namaUser}
            isi={tugas.isi}
          />
        ))}
      </div>
      {isStoredGuru == "true" && <Tambah link='tugas' />}
      
    </div>
    </>
  )
}