import React from "react";

// Define the props interface
interface ModuleCardProps {
  nama: string;
  isi: string;
  nilai: number;
  isGuruMode: string;
  id: string;
  komentarPassed: string;
  color: number;
  filePath: string;
}

interface TugasMuridData {
  id: string;
  isi: string;
  nama: string;
  namaUser: string;
  nilai: number;
  komentar: string;
}

const ModuleCardProps: React.FC<ModuleCardProps> = ({
  nama,
  isi,
  nilai,
  isGuruMode,
  id,
  komentarPassed,
  color,
  filePath,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const [nilaiBaru, setNilaiBaru] = React.useState(nilai);
  const [komentar, setKomentar] = React.useState(komentarPassed);
  const [tugas, setTugas] = React.useState<TugasMuridData>();
  const [loading, setLoading] = React.useState(false);

  const backgroundColors = [
    "#FAD5BB",
    "#FEB1B3",
    "#F1BBC6",
    "#D9B4EE",
    "#C0D2E9",
  ];

  const getRandomColor = () => {
    const bgIndex = backgroundColors[color];
    return bgIndex;
  };

  const handleButtonClick = (value: number) => {
    setNilaiBaru(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);

    try {
      setLoading(true);
      const data = {
        nilaiBaru,
        komentar,
      };
      // Use the value directly in the fetch call
      fetch(`/api/updateTugasMurid?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      window.location.reload();

      window.alert("Berhasil menambahkan komentar!");
    } catch (error) {
      console.error("Error saving Tugas:", error);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    fetch(`/api/tugasById?id=${id}`)
      .then((response) => response.json())
      .then((fetchedTugas: TugasMuridData) => {
        setTugas(fetchedTugas);
      })
      .catch((error) => console.error("Error fetching materi:", error));

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        className="w-60 md:w-40 rounded-lg p-4"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="relative w-full">
          <p className="text-2xl md:text-xl font-semibold">{nama}</p>
          <img
            src={filePath}
            alt="mindmap"
            className="my-2 rounded-lg w-full h-36 object-contain"
          />
          <p className="text-sm">{isi}</p>
          {nilai === 5 && (
            <button
              className="absolute right-[-10px] w-fit bottom-4 bg-white rounded-full p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/love.png" alt="love" />
            </button>
          )}
          {nilai === 4 && (
            <button
              className="absolute right-[-10px] w-fit bottom-4 bg-white rounded-full p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/2.png" alt="love" />
            </button>
          )}
          {nilai === 3 && (
            <button
              className="absolute right-[-10px] w-fit bottom-4 bg-white rounded-full p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/3.png" alt="love" />
            </button>
          )}
          {nilai === 2 && (
            <button
              className="absolute right-[-10px] w-fit bottom-4 bg-white rounded-full p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/4.png" alt="love" />
            </button>
          )}
          {nilai === 1 && (
            <button
              className="absolute right-[-10px] w-fit bottom-4 bg-white rounded-full p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/5.png" alt="love" />
            </button>
          )}
          {nilai === null && (
            <button
              className="absolute right-[-10px] w-fit bottom-4 bg-white rounded-full p-5"
              onClick={() => setIsModalOpen(true)}
            ></button>
          )}

          {isModalOpen && isGuruMode == "true" && (
            <form action="" onSubmit={handleSubmit}>
              <div
                ref={modalRef}
                className="h-fit w-fit bg-white absolute bottom-0 flex flex-wrap gap-2 px-2 rounded-lg py-3 shadow-lg"
              >
                <button type="button" onClick={() => handleButtonClick(5)}>
                  <img
                    src="/love.png"
                    alt="love"
                    className={`${
                      nilaiBaru === 5
                        ? "w-8 p-1 border-2 rounded-full bg-gray-200 shadow"
                        : "w-8 p-1 border-2 rounded-full shadow"
                    }`}
                  />
                </button>
                <button type="button" onClick={() => handleButtonClick(4)}>
                  <img
                    src="/2.png"
                    alt="love"
                    className={`${
                      nilaiBaru === 4
                        ? "w-8 p-1 border-2 rounded-full bg-gray-200 shadow"
                        : "w-8 p-1 border-2 rounded-full shadow"
                    }`}
                  />
                </button>
                <button type="button" onClick={() => handleButtonClick(3)}>
                  <img
                    src="/3.png"
                    alt="love"
                    className={`${
                      nilaiBaru === 3
                        ? "w-8 p-1 border-2 rounded-full bg-gray-200 shadow"
                        : "w-8 p-1 border-2 rounded-full shadow"
                    }`}
                  />
                </button>
                <button type="button" onClick={() => handleButtonClick(2)}>
                  <img
                    src="/4.png"
                    alt="love"
                    className={`${
                      nilaiBaru === 2
                        ? "w-8 p-1 border-2 rounded-full bg-gray-200 shadow"
                        : "w-8 p-1 border-2 rounded-full shadow"
                    }`}
                  />
                </button>
                <button type="button" onClick={() => handleButtonClick(1)}>
                  <img
                    src="/5.png"
                    alt="love"
                    className={`${
                      nilaiBaru === 1
                        ? "w-8 p-1 border-2 rounded-full bg-gray-200 shadow"
                        : "w-8 p-1 border-2 rounded-full shadow"
                    }`}
                  />
                </button>
                <textarea
                  className="w-full p-1"
                  placeholder="Tuliskan Komentar..."
                  style={{ resize: "none" }}
                  value={komentar}
                  onChange={(e) => setKomentar(e.target.value)}
                >
                  {tugas?.komentar}
                </textarea>
                {loading ? (
                  <button
                    type="submit"
                    className="text-sm bg-[#DE575A] py-0.5 px-3 rounded-full text-white font-medium ml-auto mr-5 disabled:opacity-50"
                    disabled
                  >
                    Kirim
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-sm bg-[#DE575A] py-0.5 px-3 rounded-full text-white font-medium ml-auto mr-5"
                  >
                    Kirim
                  </button>
                )}
              </div>
            </form>
          )}

          {isModalOpen && isGuruMode == "false" && (
            <div
              ref={modalRef}
              className="h-fit w-full bg-white absolute bottom-0 flex flex-wrap rounded-lg py-3 shadow-lg"
            >
              <div className="w-full shadow px-2 text-sm">
                <p>Komentar! </p>
              </div>
              <textarea
                className="w-full h-fit mx-2 text-center mt-2 bg-white"
                style={{ resize: "none" }}
                disabled
              >
                {tugas?.komentar ? tugas?.komentar : "Belum ada komentar"}
              </textarea>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModuleCardProps;
