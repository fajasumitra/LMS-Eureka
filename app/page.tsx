"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [isGuruMode, setGuruMode] = useState(false);
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modal, setModal] = useState(false);

  const toggleGuruMode = () => {
    setGuruMode(!isGuruMode);
    setErrorMessage(""); // Clear error message when switching modes
    setModal(false);
  };

  const handleNamaChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNama(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const isFormValid = () => {
    if (isGuruMode) {
      return nama.trim() !== "" && password.trim() === "guruportofku";
    } else {
      return nama.trim() !== "";
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      localStorage.setItem("nama", nama);
      localStorage.setItem("isGuruMode", isGuruMode ? "true" : "false");
      router.push(isGuruMode ? "/create/materi" : "/materi");
    } else {
      setErrorMessage("Password salah");
    }
  };

  return (
    <>
      <div className="w-screen min-h-screen pt-10 font-poppins bg-[#FADE9D] ">
        <header className="fixed top-0 right-0 m-5 flex items-start">
          <button onClick={handleModal} className="hidden md:block ml-2">
            <img src="hamburger.png" alt="" className="" />
          </button>
          <button
            type="button"
            onClick={toggleGuruMode}
            className={`bg-white py-1 px-5 rounded-full text-lg font-semibold ${
              modal ? "md:block order-first mt-[-7px]" : "md:hidden"
            }`}
          >
            {isGuruMode ? "Kembali ke Siswa" : "Masuk sebagai guru"}
          </button>
        </header>
        <div>
          <p className="text-7xl text-center font-medium text-[#0F2E4A] md:text-3xl md:font-bold md:mt-8">
            SELAMAT DATANG
          </p>
          <p className="text-5xl text-center font-medium text-[#0F2E4A] mt-5 md:text-2xl md:font-bold md:mt-2">
            Di Portofku
          </p>
        </div>
        <div className="mt-36 ml-40 md:mx-0 md:mt-10">
          <form className="mt-5 grid w-1/4 md:mx-auto md:w-full md:p-5">
            <p className="text-4xl font-medium text-[#0F2E4A] mb-5 md:text-2xl md:mb-2">
              Masukan Nama :{" "}
            </p>
            <input
              type="text"
              placeholder="Masukan Nama"
              className="py-2 px-3 rounded mb-5 md:w-full"
              value={nama}
              onChange={handleNamaChange}
              required
            />
            {isGuruMode && (
              <>
                <p className="text-4xl font-medium text-[#0F2E4A] md:text-2xl">
                  Masukan Password :{" "}
                </p>
                <input
                  type="password"
                  placeholder="Masukan Password"
                  className="py-2 px-3 rounded mt-5 md:mt-2"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              className={`bg-white mt-5 py-2 px-10 m-auto w-fit rounded-full ${
                !isFormValid() && "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid()}
            >
              Masuk
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-3">{errorMessage}</p>
            )}
          </form>
        </div>
        <div>
          <img
            src="8899772111-01 1.png"
            alt="Hero"
            className="absolute bottom-0 right-0 w-1/2 md:w-[90%]"
          />
        </div>
      </div>
    </>
  );
}
