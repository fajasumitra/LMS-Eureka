import React, { useEffect, useState } from "react";
import Link from "next/link";

// Define the props interface
interface ModuleCardProps {
  id: string;
  judul: string;
  isi: string;
  namaUser: string;
  color: number;
}

// Destructure the props within the component
const ModuleCard: React.FC<ModuleCardProps> = ({
  id,
  judul,
  isi,
  namaUser,
  color,
}) => {
  const backgroundColors = ["#537198", "#DE575A", "#BA86D8"];

  const [isGuruMode, setIsGuruMode] = useState("");

  const handleSubmit = async () => {
    try {
      window.confirm("Apakah anda ingin menghapus materi ini?");
      window.alert("tunggu sebentar...");
      const data = {
        id,
      };

      await fetch(`/api/materi/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      window.alert("Materi berhasil dihapus!");

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
        <Link href={`/materi/${id}`} passHref className="w-fit">
          <div className="w-60 md:w-40 h-[100%] bg-white rounded-lg">
            <div
              className="h-1/2 p-3 rounded-t-lg"
              style={{ backgroundColor: getRandomColor() }}
            >
              <p className="text-2xl font-medium text-white overflow-hidden line-clamp-2 md:text-lg ">
                {judul}
              </p>
              <p className="text-sm text-white font-light md:text-xs">
                {namaUser}
              </p>
            </div>
            <div className="p-3">
              <p className="text-[#473C3C] overflow-hidden line-clamp-3 md:text-sm">
                {isi}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ModuleCard;
