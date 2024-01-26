"use client"

import React from 'react';
import NavigationMenu from '@/components/navigationMenu';

interface MateriData {
  id: string;
  mataPelajaran: string;
  judul: string;
  materi: string;
  isi: string;
  namaUser: string;
}

export default function MateriPage({ params }: { params: { id: string } }) {
  const [nama, setNama] = React.useState('');
  const [materi, setMateri] = React.useState<MateriData | null>(null);

  React.useEffect(() => {
    const storedNama = localStorage.getItem('nama');
    if (storedNama) {
      setNama(storedNama);
    }

    // Fetch Materi data from your Next.js TypeScript API route
    fetch(`/api/materi/${params.id}`)
      .then((response) => response.json())
      .then((fetchedMateri: MateriData) => {
        setMateri(fetchedMateri);
      })
      .catch((error) => console.error('Error fetching materi:', error));
  }, [params.id]);

  
  if (!materi) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='min-h-screen w-screen bg-white'>
        <div className='flex'>
          <NavigationMenu />
          <div className='ml-28 mt-10'>
            <p className='text-3xl font-semibold'>{nama}</p>
            <div className='w-full h-1 bg-[#39576C] mt-1' />
            <p className='text-lg mt-1'>{materi.judul}</p>
          </div>
        </div>
        <div className='rounded-lg border-[3.5px] mx-auto border-[#39576C] w-4/5 p-5 mt-10'>
          <p className='text-center text-2xl font-medium mb-4'>{materi.judul}</p>
          <div className='flex justify-center'>
            <img src="/Mask group.png" alt="" className='' />
          </div>
          <p className='mt-2'>{materi.isi}</p>
        </div>
      </div>
    </>
  );
}
