import Link from "next/link";
import React from "react";

interface navigationMenuProps {
  darkMode: boolean;
  link: string;
  active: string;
}

const navigationMenu: React.FC<navigationMenuProps> = ({
  darkMode,
  link,
  active,
}) => {
  return (
    <>
      <aside className="grid items-center justify-center absolute left-0">
        {active === "materi" ? (
          <div className="grid items-center justify-center px-3 py-5 bg-[#F5F6F7] gap-5 rounded-br-lg h-fit w-fit">
            <Link
              href={"/materi"}
              className=" bg-[#3F3F50] rounded-xl p-4 md:p-3"
            >
              <img
                src="/blackmateri.svg"
                alt="materi"
                className="w-7 fill-current text-black md:w-6"
              />
            </Link>
            <p className="text-center mt-[-16px] font-bold">Materi</p>
            <Link
              href={"/tugas"}
              className="bg-[#E2E3E3] rounded-xl p-4 md:p-3"
            >
              <img
                src="/tugasBlack.svg"
                alt=""
                className="w-6 md:w-5 fill-current text-black "
              />
            </Link>
            <p className="text-center mt-[-16px] font-bold">Tugas</p>
          </div>
        ) : active === "tugas" ? (
          <div className="grid items-center justify-center px-3 py-5 bg-[#F5F6F7] gap-5 rounded-br-lg h-fit w-fit">
            <Link
              href={"/materi"}
              className=" bg-[#E2E3E3] rounded-xl p-4 md:p-3"
            >
              <img
                src="/book.svg"
                alt="materi"
                className="w-7 fill-current text-black md:w-6"
              />
            </Link>
            <p className="text-center mt-[-16px] font-bold">Materi</p>
            <Link
              href={"/tugas"}
              className="bg-[#3F3F50] rounded-xl p-4 md:p-3"
            >
              <img
                src="/tugas.svg"
                alt=""
                className="w-6 fill-current text-black md:w-5"
              />
            </Link>
            <p className="text-center mt-[-16px] font-bold">Tugas</p>
          </div>
        ) : (
          <div className="grid items-center justify-center px-3 py-5 bg-[#F5F6F7] gap-5 rounded-br-lg h-fit w-fit">
            <Link
              href={"/materi"}
              className=" bg-[#E2E3E3] rounded-xl p-4 md:p-3"
            >
              <img
                src="/book.svg"
                alt="materi"
                className="w-7 fill-current text-black md:w-6"
              />
            </Link>
            <p className="text-center mt-[-16px] font-bold">Materi</p>
            <Link
              href={"/tugas"}
              className="bg-[#E2E3E3] rounded-xl p-4 md:p-3"
            >
              <img
                src="/tugasBlack.svg"
                alt=""
                className="w-6 fill-current text-black md:w-5"
              />
            </Link>
            <p className="text-center mt-[-16px] font-bold">Tugas</p>
          </div>
        )}
      </aside>
      <Link
        href={link}
        className="bg-[#3F3F50] rounded-xl p-4 h-fit w-fit mx-auto absolute right-5 top-5 md:p-3"
      >
        <img
          src="/kembali.svg"
          alt=""
          className="w-6 fill-current text-black md:w-5"
        />
      </Link>
      {darkMode ? (
        <p className="text-center font-bold absolute right-4 top-[74px] md:hidden">
          Kembali
        </p>
      ) : (
        <p className="text-center font-bold absolute right-4 top-[74px] text-white md:hidden">
          Kembali
        </p>
      )}
    </>
  );
};

export default navigationMenu;
