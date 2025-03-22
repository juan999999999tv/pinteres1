"use client"; // Indica que este componente se ejecuta solo en el cliente

import Image from "next/image";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export default function Carta({ url }) {

  const [like, setLike] = useState(false);

  // Construcción segura de la URL con la clave de Unsplash
  const ACCESS_KEY = "4Hr2aovGwCUNj1Op8miLuBlEA9VaAqYkoA4dolH7XsE"; // Agregar comillas
const imageUrl = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=500`;


  return (
    <div className="w-fit mb-2 rounded-xl overflow-hidden relative">
      {/* Asegurar que la URL no sea vacía */}
      {url && (
        <Image
          src={imageUrl}
          width={300}
          height={200}
          alt="Imagen del producto"
          className="w-full"
        />
      )}

    

      <div className="absolute backdrop-blur-sm p-5 cursor-pointer rounded-full bottom-5 right-5">
        {like ? (
          <FaHeart size={25} fill="red" onClick={() => setLike(false)} />
        ) : (
          <FaRegHeart fill="red" size={25} onClick={() => setLike(true)} />
        )}
      </div>
    </div>
  );
}
