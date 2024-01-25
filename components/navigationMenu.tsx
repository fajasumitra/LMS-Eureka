import Link from 'next/link'
import React from 'react'

export default function navigationMenu() {
  return (
    <>
        <aside className='grid items-center justify-center absolute left-0'>
          <div className='grid items-center justify-center px-3 py-5 bg-[#F5F6F7] gap-5 rounded-br-lg h-fit w-fit'>
            <Link href={'/materi'} className=' bg-[#E2E3E3] rounded-xl p-4'>
              <img src="/book.svg" alt="materi" className='w-7 fill-current text-black'/>
            </Link>
            <Link href={'/tugas'} className='bg-[#E2E3E3] rounded-xl p-4'>
              <img src="/tugasBlack.svg" alt="" className='w-6 fill-current text-black '/>
            </Link>
          </div>
        </aside>
            <Link href={'/'} className='bg-[#3F3F50] rounded-xl p-4 h-fit w-fit mx-auto absolute right-5 top-5'>
              <img src="/kembali.svg" alt="" className='w-6 fill-current text-black'/>
            </Link>
    </>
  )
}
