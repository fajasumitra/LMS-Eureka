"use client";

import React from 'react'
import CardTugas from '../../components/cardTugas'
import NavigationMenu from '@/components/navigationMenu'
import Nambah from '@/components/nambah'

export default function index() {
  const [nama, setNama] = React.useState("");

  React.useEffect(() => {
    // Retrieve 'nama' from localStorage when the component mounts
    const storedNama = localStorage.getItem("nama");
    if (storedNama) {
      setNama(storedNama);
    }
  }, []);
  return (
    <>
    <div className='w-screen min-h-screen bg-[#97C17E]'>
      <div className='flex'>
        <NavigationMenu />
        <div className='ml-28 mt-10'>
          <p className='text-3xl font-semibold'>{nama}</p>
          <p className='text-2xl mt-1'>Selamat datang di eureka!</p>
          <div className='w-full h-1 bg-[#39576C] mt-1'/>
          <p className='text-3xl font-semibold mt-5'>Tugas</p>
        </div>
      </div>
      <div className='flex flex-wrap gap-10 mx-auto w-[90%] mt-10'> 
        <CardTugas id='1' judul='saddas' namaUser="dasads" isi="saddas" />
      </div>
    </div>
    </>
  )
}