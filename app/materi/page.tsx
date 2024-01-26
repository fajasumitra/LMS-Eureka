"use client"

import React, {useState, useEffect} from "react";
import NavigationMenu from "@/components/navigationMenu";
import CardMateri from "@/components/cardMateri";
import Tambah from "@/components/tambah";

interface MateriData {
  id: string;
  mataPelajaran: string;
  judul: string;
  materi : string;
  isi: string;
  namaUser: string;
}


export default function index() {
  
  const [nama, setNama] = useState('');
  const [materiList, setMateriList] = useState<MateriData[]>([]);
  const [isStoredGuru, setIsStoredGuru] = useState('');

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
    fetch('/api/materi')
      .then((response) => response.json())
      .then((materi: MateriData[]) => setMateriList(materi))
      .catch((error) => console.error('Error fetching tugas:', error));
  }, []);
  return (
    <>
      <div className="w-screen min-h-screen bg-[#C1E2EA]">
        <div className="flex">
          <NavigationMenu />
          <div className="ml-28 mt-10">
            <p className="text-3xl font-semibold">{nama}</p>
            <p className="text-2xl mt-1">Selamat datang di Portofku!</p>
            <div className="w-full h-1 bg-[#39576C] mt-1" />
            <p className="text-3xl font-semibold mt-5">Materi</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mx-auto w-[90%] mt-10">
        {materiList.map((materi) => (
          <CardMateri key={materi.id} id={materi.id} judul={materi.judul} namaUser={materi.namaUser} isi={materi.isi}/>
        ))}
        </div>
        {isStoredGuru == "true" && <Tambah link='tugas' />}
      </div>
    </>
  );
}
