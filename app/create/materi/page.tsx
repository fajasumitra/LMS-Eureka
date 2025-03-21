"use client";

import React from "react";
import NavigationMenu from "@/components/navigationMenu";

export default function page() {
  const [nama, setNama] = React.useState("");
  const [judul, setJudul] = React.useState("");
  const [materi, setMateri] = React.useState("");
  const [mataPelajaran, setMataPelajaran] = React.useState("");
  const [isi, setIsi] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [isGuruMode, setIsGuruMode] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("judul", judul);
      formData.append("materi", materi);
      formData.append("mataPelajaran", mataPelajaran);
      formData.append("nama", nama);
      formData.append("isi", isi);
      if (file) {
        formData.append("file", file);
      }

      // Save the data to your Next.js API route
      await fetch("/api/createMateri", {
        method: "POST",
        body: formData,
      });

      setJudul("");
      setMateri("");
      setMataPelajaran("");
      setIsi("");
      setFile(null);

      window.location.reload();

      window.alert("Materi berhasil ditambahkan!");
    } catch (error) {
      console.error("Error saving Tugas:", error);
    }
  };

  React.useEffect(() => {
    // Retrieve 'nama' from localStorage when the component mounts
    const storedNama = localStorage.getItem("nama");
    if (storedNama) {
      setNama(storedNama);
    }

    const storedGuru = localStorage.getItem("isGuruMode");
    if (storedGuru) {
      setIsGuruMode(storedGuru);
    }

    if (storedGuru !== "true") {
      window.location.href = "/materi";
    }
  }, []);
  return (
    <>
      <div className="min-h-screen w-screen bg-white">
        <div className="flex">
          <NavigationMenu link="/" darkMode={true} active="materi" />
          <div className="ml-28 md:ml-24 mt-10">
            <p className="text-3xl font-semibold md:text-2xl">
              Tambahkan Materi
            </p>
            <div className="w-full h-0.5 bg-[#39576C] mt-1" />
            <p className="text-lg mt-1">{nama}</p>
          </div>
        </div>
        <div className="ml-32 md:ml-0 md:mx-auto md:p-5 mt-16 md:mt-28 font-inter w-fit">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-4 gap-3"
            encType="multipart/form-data"
          >
            <label
              htmlFor=""
              className="mr-4 text-xl font-medium text-gray-700"
            >
              Judul
            </label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="col-span-3 w-full border-2 border-gray-400 focus:border-gray-600 py-1 px-3 rounded-full"
              placeholder="Judul Materi"
            />

            <label
              htmlFor=""
              className="mr-4 text-xl font-medium text-gray-700"
            >
              Materi
            </label>
            <input
              type="text"
              value={materi}
              onChange={(e) => setMateri(e.target.value)}
              className="col-span-3 w-full border-2 border-gray-400 focus:border-gray-600 py-1 px-3 rounded-full"
              placeholder="Materi"
            />

            <label
              htmlFor=""
              className="mr-4 text-xl font-medium text-gray-700"
            >
              Mata Pelajaran
            </label>
            <input
              type="text"
              value={mataPelajaran}
              onChange={(e) => setMataPelajaran(e.target.value)}
              className="col-span-3 w-full border-2 border-gray-400 focus:border-gray-600 py-1 px-3 rounded-full"
              placeholder="Mata Pelajaran"
            />

            <label
              htmlFor=""
              className="mr-4 text-xl font-medium text-gray-700"
            >
              File
            </label>
            <input
              type="file"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                setFile(selectedFile || null);
              }}
              className="col-span-3 w-full py-1 px-3"
            />

            <label
              htmlFor=""
              className="mr-4 text-xl font-medium text-gray-700"
            >
              Isi
            </label>
            <textarea
              value={isi}
              onChange={(e) =>
                setIsi(e.target.value.replace(/(?:\r\n|\r|\n)/g, "\n"))
              }
              className="col-span-3 w-full border-2 border-gray-400 focus:border-gray-600 py-1 px-3 rounded-lg h-40"
              placeholder="Isi Materi"
              style={{ resize: "none" }}
            />
            {loading ? (
              <button
                type="submit"
                className="col-span-4 bg-[#DE575A] text-white py-1.5 px-7 rounded-full w-fit justify-self-end mr-5 disabled:opacity-50"
                disabled
              >
                Kirim
              </button>
            ) : (
              <button
                type="submit"
                className="col-span-4 bg-[#DE575A] text-white py-1.5 px-7 rounded-full w-fit justify-self-end mr-5"
              >
                Kirim
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
