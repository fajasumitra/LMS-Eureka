import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ModuleCardProps {
  id: string;
  judul: string;
  isi: string;
  namaUser: string;
  color: number;
  pengumpulan: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  id,
  judul,
  isi,
  namaUser,
  color,
  pengumpulan,
}) => {
  const backgroundColors = ["#53719857", "#DE575A70", "#BA86D8A1"];

  const [isGuruMode, setIsGuruMode] = useState("");

  const handleSubmit = async () => {
    try {
      window.confirm("Apakah anda ingin menghapus tugas ini?");
      window.alert("tunggu sebentar...");
      const data = {
        id,
      };

      await fetch(`/api/tugas/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      window.alert("Tugas berhasil dihapus!");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedIsGuru = localStorage.getItem("isGuruMode");
    if (storedIsGuru) {
      setIsGuruMode(storedIsGuru);
    }
  });

  const getRandomColor = () => {
    const bgIndex = backgroundColors[color];
    return bgIndex;
  };

  return (
    <>
      <div className="relative">
        {isGuruMode === "true" && (
          <button
            onClick={handleSubmit}
            className="absolute top-2 right-2 bg-red-400 text-white p-1 rounded-md"
          >
            Hapus
          </button>
        )}
        <Link href={`/tugas/${id}`} passHref className="w-fit">
          <div className="w-60 h-full bg-white rounded-lg">
            <div
              className="h-1/2 p-3 rounded-t-lg"
              style={{ backgroundColor: getRandomColor() }}
            >
              <p className="text-2xl font-medium  text-gray-600 overflow-hidden line-clamp-2">
                {judul}
              </p>
              <p className="text-sm  text-gray-600 font-light">{namaUser}</p>
            </div>
            <div className="p-3">
              <p className="text-[#473C3C] overflow-hidden line-clamp-2">
                {isi}
              </p>
            </div>
            <p className="text-xs text-right text-gray-500 mr-3 pb-2">
              {`Batas Pengumpulan : ${pengumpulan}`}{" "}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ModuleCard;
