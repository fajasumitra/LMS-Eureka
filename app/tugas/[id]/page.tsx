"use client"

import React, { useEffect, useState } from 'react';
import NavigationMenu from '@/components/navigationMenu';
import Nambah from '@/components/nambah';
import CardDetailMateri from '@/components/cardDetailMateri';

interface TugasMuridData {
  id: string;
  isi: string;
  nama: string;
  namaUser: string;
}

export default function Index({ params }: { params: { id: string } }) {
  const [nama, setNama] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [tugasList, setTugasList] = useState<TugasMuridData[]>([]);

  useEffect(() => {
    const storedNama = localStorage.getItem('nama');
    if (storedNama) {
      setNama(storedNama);
    }

    // Fetch TugasMurid data from your Next.js TypeScript API route
    fetch(`/api/tugas/${params.id}`)
      .then((response) => response.json())
      .then((fetchedTugasList: TugasMuridData[]) => {
        setTugasList(fetchedTugasList);
        console.log(fetchedTugasList);
      })
      .catch((error) => console.error('Error fetching tugas:', error));
      ``
  }
  , [params.id]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='w-screen min-h-screen bg-[#97C17E]'>
        <div className='flex'>
          <NavigationMenu />
          <div className='ml-28 mt-10'>
            <p className='text-3xl font-semibold'>{nama}</p>
            <div className='w-full h-1 bg-[#39576C] mt-1'/>
            <p className='text-3xl font-semibold mt-5'>Tugas</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-10 mx-auto w-[90%] mt-10'>
          {tugasList.map((tugas) => (
            <CardDetailMateri nama={tugas.namaUser} isi={tugas.isi} key={tugas.id} />
          ))}
        </div>
        <Nambah openModal={openModal} />
        {isModalOpen && (
          <div className="w-1/5 broder-2 fixed bg-white right-28 bottom-0 h-2/5 rounded-t-lg">
          <form action="" className="flex flex-col">
            <div className="flex flex-row-reverse border-b-2">
              <button onClick={closeModal}>
                <img src="/x.png" alt="" className="w-4 m-3" />
              </button>
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                id="name"
                name="name"
                className="py-2 focus:outline-none focus:shadow-outline border-b-2 mb-2 w-[90%] mx-auto"
                placeholder="Nama"
              />
            </div>
            <textarea
              id="tugas"
              name="tugas"
              style={{ resize: "none" }}
              className="px-4 focus:outline-none focus:shadow-outline mb-2 w-full h-32"
              placeholder="Tuliskan tugasmu disini..."
            ></textarea>
            <button
              type="submit"
              className="border-2 border-gray-400 rounded-full text-red-500 font-medium py-1 px-4 self-end mr-5"
            >
              Kirim
            </button>
          </form>
        </div>
        )}
      </div>
    </>
  );
}
