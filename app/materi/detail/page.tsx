import React from 'react'
import NavigationMenu from '@/components/navigationMenu'

export default function page() {
  return (
    <>
    <div className='min-h-screen w-screen bg-white'>
        <div className='flex'>
            <NavigationMenu />
            <div className='ml-28 mt-10'>
            <p className='text-3xl font-semibold'>Hai Hikari</p>
            <p className='text-2xl mt-1'>Selamat datang di eureka!</p>
            <div className='w-full h-1 bg-[#39576C] mt-1'/>
            <p className='text-lg mt-1'>yura yunita S.Pd</p>
            </div>
        </div>
        <div className='rounded-lg border-[3.5px] mx-auto border-[#39576C] w-4/5 p-5 mt-10'>
            <p className='text-center text-2xl font-medium mb-4'>Menggambar pemandangan</p>
            <div className='flex justify-center'>
              <img src="/Mask group.png" alt="" className=''/>
            </div>
            <p className='mt-2'>sfafasafsafsafsfas</p>
        </div>
    </div>
    </>
  )
}
