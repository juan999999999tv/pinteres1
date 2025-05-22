"use client";
import { db } from "@/firebase/config";
import useToast from "@/hooks/useToast";
import { useUserStore } from "@/store/userStore";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const { usuario } = useUserStore();

  const [input, setInput] = useState(null);
  const { errorToast, exito } = useToast();

  const agregarImagen = async () => {
    try {
      const docRef = await addDoc(collection(db, "productos"), {
        url: input,
      });
      exito("Imagen agregada exitosamente, la id es:" + docRef.id);
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <>
      <div>
        {usuario ? (
          <div className="mx-auto flex flex-col gap-5 w-fit text-center">
            <Image
              className="rounded-full"
              src={usuario.photoURL}
              width={200}
              height={200}
              alt="imagen del usuario"
            />
            <h2>{usuario.displayName}</h2>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="border px-3 py-2 border-gray-500"
              placeholder="Ingresa la url de imagen que quieras agregar"
            />
            <button
              onClick={agregarImagen}
              className="bg-red-600 py-2 rounded-xl text-black font-bold"
            >
              Agregar imagen
            </button>
          </div>
        ) : (
          <h2>No ha iniciado sesion el usuario.</h2>
        )}
      </div>
    </>
  );
}
