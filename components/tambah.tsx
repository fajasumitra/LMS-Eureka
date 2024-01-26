// nambah.tsx
import React from 'react';
import Link from 'next/link';

interface NambahProps {
  link : string;
}

const Nambah: React.FC<NambahProps> = ({ link }) => {
  return (
    <>
    <Link href={`/create/${link}`}>
      <div className='fixed right-6 bottom-6'>
        <button className='w-12 h-12 rounded-full bg-[#365071]'>
          <img src="/plus.svg" alt="" className='w-8 mx-auto'/>
        </button>
      </div>
    </Link>
    </>
  );
}

export default Nambah;
