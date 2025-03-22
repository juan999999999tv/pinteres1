"use client";
import { auth } from "@/firebase/config";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import useToast from "@/hooks/useToast";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Formulario2() {
  // Estado para email y contraseña
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  // Funciones del store y los toasts
  const { loginUser } = useUserStore();
  const { exito, errorToast } = useToast();
  const router = useRouter();

  // Iniciar sesión con email y contraseña
  const loginUser2 = async () => {
    if (!email || !contraseña) {
      errorToast("Por favor, completa todos los campos.");
      return;
    }

    try {
      const respuesta = await signInWithEmailAndPassword(auth, email, contraseña);
      loginUser(respuesta.user);
      exito("¡Iniciaste sesión exitosamente!");
      router.push("/perfil"); // Redirige al perfil después de iniciar sesión
    } catch (error) {
      errorToast("Error al iniciar sesión. Verifica tus credenciales.");
      console.error("Error de inicio de sesión:", error);
    }
  };

  // Iniciar sesión con Google
  const provider = new GoogleAuthProvider();
  const iniciarConGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithPopup(auth, provider);
      loginUser(response.user);
      exito("¡Iniciaste sesión con Google!");
      router.push("/perfil");
    } catch (error) {
      errorToast("Error al iniciar sesión con Google.");
      console.error("Error con Google:", error);
    }
  };

  return (
    <form className="flex flex-col mx-[30%] gap-6 p-6 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-center">Iniciar Sesión</h2>

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-gray-400 px-3 py-2 rounded-lg"
        placeholder="Ingresa tu email"
        type="email"
      />

      <input
        onChange={(e) => setContraseña(e.target.value)}
        value={contraseña}
        className="border border-gray-400 px-3 py-2 rounded-lg"
        placeholder="Ingresa tu contraseña"
        type="password"
      />

      <button
        type="button"
        onClick={loginUser2}
        className="bg-red-600 py-2 rounded-2xl font-bold text-white hover:bg-red-700 transition"
      >
        Iniciar sesión
      </button>

      <button
        type="button"
        onClick={iniciarConGoogle}
        className="bg-blue-500 py-2 rounded-2xl font-bold text-white hover:bg-blue-600 transition"
      >
        Iniciar sesión con Google
      </button>
    </form>
  );
}
