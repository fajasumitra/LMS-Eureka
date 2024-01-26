import React from 'react'

// Define the props interface
interface ModuleCardProps {
  nama: string;
  isi: string;
}

const ModuleCardProps: React.FC<ModuleCardProps> = ({nama, isi }) => {
  return (
    <>
        <div className='w-60 h-1/2 bg-[#FAD5BB] rounded-lg p-4'>
          <div>
            <p className='text-2xl font-semibold'>{nama}</p>
            <img src="/mindmap.png" alt="mindmap" className='my-2'/>
            <p className='text-sm'>{isi}</p>
          </div>
        </div>
    </>
  )
}

export default ModuleCardProps