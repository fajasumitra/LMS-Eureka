import React from 'react';
import Link from 'next/link';

// Define the props interface
interface ModuleCardProps {
  id: string;
  judul: string;
  isi: string;
  namaUser: string;
  color : number;
}

// Destructure the props within the component
const ModuleCard: React.FC<ModuleCardProps> = ({ id, judul, isi, namaUser, color }) => {
  const backgroundColors = ['#537198', '#DE575A', '#BA86D8'];

  const getRandomColor = () => {
    const bgIndex =backgroundColors[color]
    return bgIndex;
  };
  return (
    <Link href={`/materi/${id}`} passHref className='w-fit h-fit'>
        <div className='w-60 h-1/2 bg-white rounded-lg'>
          <div className='h-1/2 p-3 rounded-t-lg' style={{ backgroundColor: getRandomColor() }}>
            <p className='text-3xl font-medium text-white'>{judul}</p>
            <p className='text-sm text-white font-light'>{namaUser}</p>
          </div>
          <div className='p-3'>
            <p className='text-[#473C3C]'>{isi}</p>
          </div>
        </div>
    </Link>
  );
};

export default ModuleCard;
