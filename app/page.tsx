'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  return (
    <>
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='mx-auto w-2/5 bg-[#6235C9] py-10 rounded-lg'>
        <button className='absolute top-5 right-5 text-white font-bold bg-[#FFB800] rounded px-3 py-2'>Masuk Sebagai Guru</button>
        <form>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-4xl text-white font-bold'>Sign In</div>
            <div className='text-white mt-10'>Nama</div>
            <input className='w-3/5 h-10 rounded mt-2' type='text' />
            <div className='flex flex-row items-center justify-center mt-10'>
              <button className='rounded px-3 py-2 bg-[#FFB800] text-white font-bold' type="button" onClick={() => router.push('/materi')}>Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
