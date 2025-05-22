'use client'
import { auth } from "@/firebase/config";
import useToast from "@/hooks/useToast";
import { useUserStore } from "@/store/userStore";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Formulario2() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { loginUser } = useUserStore();
  const { exito, errorToast } = useToast();
  const router = useRouter();

  const loginUser2 = async () => {
    if (!email || !contraseña) {
      return errorToast("Por favor completa todos los campos.");
    }

    try {
      const respuesta = await signInWithEmailAndPassword(
        auth,
        email,
        contraseña
      );
      loginUser(respuesta.user);
      exito("Iniciaste sesión exitosamente");
      router.push("/perfil");
    } catch (error) {
      console.log(error);
      errorToast("Error al iniciar sesión. Revisa tus credenciales.");
    }

  const iniciarConGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithPopup(auth, new GoogleAuthProvider());
      loginUser(response.user);
      exito("Iniciaste sesión exitosamente");
      router.push("/perfil");
    } catch (error) {
      console.log(error);
      errorToast("Error al iniciar con Google.");
    }

  return (
    <form className="flex flex-col mx-[30%] gap-6 p-6 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-center">Iniciar sesión</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-400 px-3 py-2 rounded-lg text-black"
        placeholder="Ingresa tu email"
        type="email"
      />

      <input
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
        className="border border-gray-400 px-3 py-2 rounded-lg text-black"
        placeholder="Ingresa tu contraseña"
        type="password"
      />

      <button
        type="button"
        onClick={loginUser2}
        className="bg-red-500 py-2 rounded-2xl font-bold text-black"
      >
        Iniciar sesión
      </button>

      <button
        type="button"
        onClick={iniciarConGoogle}
        className="bg-blue-500 py-2 rounded-2xl font-bold text-black hover:bg-blue-600 transition"
      >
        Iniciar con Google
      </button>
    </form>
  );
}
