"use client";
import { PinterestIcon } from "../assets/PinterestIcon";
import Image from "next/image";
import Link from "next/link";
import { useUserStore } from "../store/userStore";
import { useEffect, useState } from "react";

export default function NavBar() {
  const usuarioStore = useUserStore((state) => state.usuario);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    setUsuario(usuarioStore); // Asegura que usuario solo se use en el cliente
  }, [usuarioStore]);

  return (
    <div className="flex p-5 justify-between z-50 items-center sticky top-0 bg-white font-bold">
      <div className="flex gap-5 bg-red-600 p-2 rounded-2xl text-black">
        <Link href="/">
          <div>
            <PinterestIcon />
          </div>
        </Link>
        <Link href="/explore">Explorar</Link>
      </div>

      <ul className="flex gap-5 items-center bg-red-300 p-2 rounded-2xl text-black">
        <li>Info</li>
        <li>Empresa</li>
        <li>Blog</li>

        {usuario ? (
          <li className="flex items-center gap-2 border border-gray-400 rounded-lg px-2 py-1">
            <Link className="flex gap-2 items-center" href="/perfil">
              {usuario.photoURL && (
                <Image
                  className="rounded-full"
                  src={usuario.photoURL}
                  width={20}
                  height={20}
                  alt="profile"
                />
              )}
              Mi perfil
            </Link>
          </li>
        ) : (
          <>
            <li className="bg-red-600 p-2 rounded-2xl text-black">
              <Link href="/login">Iniciar Sesión</Link>
            </li>
            <li className="bg-red-600 p-2 rounded-2xl text-black">
              <Link href="/registro">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
