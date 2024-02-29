"use client"

import React, { useEffect, useState } from 'react';
import NavigationMenu from '@/components/navigationMenu';
import Nambah from '@/components/nambah';
import CardDetailMateri from '@/components/cardDetailMateri';

interface TugasMuridData {
  id: string;
  isi: string;
  nama: string;
  namaUser: string;
  nilai: number;
  komentar: string;
  filePath: string;
}

interface tugasDetail {
  id: string;
  isi: string;
  namaUser: string;
  mataPelajaran: string;
  judul: string;
  tanggalPengumpulan: string;
  materi: string;
}

export default function Index({ params }: { params: { id: string } }) {
  const [nama, setNama] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [tugasList, setTugasList] = useState<TugasMuridData[]>([]);
  const [name , setName] = useState('');
  const [isi , setIsi] = useState('');
  const [isGuruMode, setIsGuruMode] = useState('' as string);
  const [tugasDetail, setTugasDetail] = useState<tugasDetail>();
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoadingButton(true);
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('isi', isi);
      if (file) {
        formData.append('file', file);
      }

      // Save the data to your Next.js API route
      await fetch(`/api/createTugasMurid?id=${params.id}`, {
        method: 'POST',
        body: formData,
      });

      setName('');
      setIsi('');
      setFile(null);

      window.location.reload();

      window.alert("Tugas berhasil ditambahkan!");

    } catch (error) {
      console.error('Error saving Tugas:', error);
    }
  }

  useEffect(() => {
    const storedNama = localStorage.getItem('nama');
    if (storedNama) {
      setNama(storedNama);
    }
    const storedGuru = localStorage.getItem('isGuruMode');
    if (storedGuru) {
      setIsGuruMode(storedGuru);
    }

    // Fetch TugasMurid data from your Next.js TypeScript API route
    fetch(`/api/tugas/${params.id}`)
      .then((response) => response.json())
      .then((fetchedTugasList: TugasMuridData[]) => {
        setTugasList(fetchedTugasList);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tugas:', error)
        setLoading(false);
      });
    
    fetch(`/api/tugasAsliById?id=${params.id}`)
      .then((response) => response.json())
      .then((fetchedTugasDetail: tugasDetail) => {
        setTugasDetail(fetchedTugasDetail);
      })
      .catch((error) => console.error('Error fetching tugas:', error));
    
  }
  , [params.id]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!tugasDetail) {
    return (
      <div className="flex items-center justify-center mx-auto min-h-screen">
        <div role="status">
            <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-200 fill-[#39576C]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='w-screen min-h-screen bg-white'>
        <div className='absolute right-48 top-20'>
          <p className='text-gray-600 text-lg'>{`Tenggat Waktu : ${new Date(tugasDetail.tanggalPengumpulan).toLocaleDateString()}`}</p>
          <div className="w-full h-0.5 bg-gray-300 mt-1" />
        </div>
        <div className='flex'>
          <NavigationMenu link='/tugas' darkMode={true} active='tugas'/>
          <div className='ml-28 mt-10'>
            <p className='text-3xl font-semibold'>{tugasDetail?.mataPelajaran}</p>
            <p className='text-2xl font-inter font-semibold'>{tugasDetail?.materi}</p>
            <div className='w-80 h-0.5 bg-[#39576C] mt-1'/>
            <p className='text-xl '>{tugasDetail?.namaUser}</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-10 mx-auto w-[90%] mt-32'>
        {loading ? (
          <div className="flex items-center justify-center mx-auto mt-20">
            <div role="status">
                <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-200 fill-[#39576C]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            </div>
          </div>
        ) :tugasList.length === 0 ? (
          <div className='w-full'>
            <p className="text-4xl text-gray-400 font-semibold text-center">Belum Ada Tugas</p>
            <p className="text-2xl text-gray-400 text-center">Tambahkan Tugas</p>
          </div>
        ) : (tugasList.map((tugas, index) => (
            <CardDetailMateri komentarPassed={tugas.komentar} id={tugas.id} nama={tugas.namaUser} isi={tugas.isi} key={tugas.id} nilai={tugas.nilai} isGuruMode={isGuruMode} color={index % 5} filePath={`https://storage.cloud.google.com/portofku/${tugas.filePath.replace(/\\/g, '/')}`}/>
          )))}
        </div>
        <Nambah openModal={openModal} />
        {isModalOpen && (
          <div className="w-1/5 broder-2 border fixed bg-white right-28 bottom-0 h-2/5 rounded-t-lg">
          <form onSubmit={handleSubmit} className="flex flex-col" encType="multipart/form-data">
            <div className="flex flex-row-reverse border-b-2">
              <button onClick={closeModal}>
                <img src="/x.png" alt="" className="w-4 m-3" />
              </button>
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                id="name"
                name="name"
                className="py-2 focus:outline-none focus:shadow-outline border-b-2 mb-2 w-[90%] mx-auto"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <textarea
              id="tugas"
              name="tugas"
              style={{ resize: "none" }}
              className="px-4 focus:outline-none focus:shadow-outline mb-2 w-full h-32"
              placeholder="Tuliskan tugasmu disini..."
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              required
            ></textarea>
            <div className='flex items-center justify-center'>
            <input
              type="file"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                setFile(selectedFile || null);
              }}
              className="text-sm ml-2"
            />
            {loadingButton ? (
            <button
              type="submit"
              className="border-2 border-gray-400 rounded-full text-red-500 font-medium py-1 px-4 self-end mr-5 disabled:opacity-50"
              disabled
            >
              Kirim
            </button>
              ) : (
                <button
                  type="submit"
                  className="border-2 border-gray-400 rounded-full text-red-500 font-medium py-1 px-4 self-end mr-5"
                >
                  Kirim
                </button>
              )}
            </div>
          </form>
        </div>
        )}
      </div>
    </>
  );
}
