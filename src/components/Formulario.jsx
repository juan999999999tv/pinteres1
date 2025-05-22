"use client";
import { auth } from "@/firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const registrarUsuario = async () => {
    try {
      const respuesta = await createUserWithEmailAndPassword(auth,email,contraseña);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    registrarUsuario();
  };

  return (
    <form className="border p-4 flex flex-col mx-[30%] gap-10">
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-400 px-3 py-2 rounded-lg"
        placeholder="Ingresa tu email"
        type="email"/>
        
      <input
        onChange={(e) => setContraseña(e.target.value)}
        className="border-gray-400 px-3 py-2 rounded-lg text-black"
        placeholder="Ingresa tu contraseña"
        type="password"/>

      <button
        onClick={handleClick}
        className="bg-red-600 py-2 rounded-2xl font-bold text-black">
        Registrame
      </button>
    </form>
  );
}
