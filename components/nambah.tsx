// nambah.tsx
import React from 'react';

interface NambahProps {
  openModal: () => void;
}

const Nambah: React.FC<NambahProps> = ({ openModal }) => {
  return (
    <>
      <div className='fixed right-6 bottom-6'>
        <button className='w-12 h-12 rounded-full bg-[#365071]' onClick={openModal}>
          <img src="/plus.svg" alt="" className='w-8 mx-auto'/>
        </button>
      </div>
    </>
  );
}

export default Nambah;
