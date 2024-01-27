import React from 'react';
import Link from 'next/link';

interface ModuleCardProps {
  id: string;
  judul: string;
  isi: string;
  namaUser: string;
  color : number;
  pengumpulan : string;
}


const ModuleCard: React.FC<ModuleCardProps> = ({ id, judul, isi, namaUser, color, pengumpulan }) => {

  const backgroundColors = ['#53719857', '#DE575A70', '#BA86D8A1'];

  const getRandomColor = () => {
    const bgIndex =backgroundColors[color]
    return bgIndex;
  };

  return (
    <Link href={`/tugas/${id}`} passHref className='w-fit h-fit'>
        <div className='w-60 h-1/2 bg-white rounded-lg'>
          <div className='h-1/2 p-3 rounded-t-lg' style={{ backgroundColor: getRandomColor() }}>
            <p className='text-3xl font-medium  text-gray-600'>{judul}</p>
            <p className='text-sm  text-gray-600 font-light'>{namaUser}</p>
          </div>
          <div className='p-3'>
            <p className='text-[#473C3C]'>{isi}</p>
          </div>
          <p className='text-xs text-right text-gray-500 mr-3 pb-2'>{`Batas Pengumpulan : ${pengumpulan}`} </p>
        </div>
    </Link>
  );
};

export default ModuleCard;
