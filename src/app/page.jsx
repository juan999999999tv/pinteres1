"use client";  // 🔹 Para que todo se ejecute en el cliente

import { useEffect, useState } from "react";
import Carta from "../components/carta.jsx";

export default function Home() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const obtenerFotos = async () => {
      const ACCESS_KEY = "4Hr2aovGwCUNj1Op8miLuBlEA9VaAqYkoA4dolH7XsE";
      const respuesta = await fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=500`);
      const datos = await respuesta.json();
      setFotos(Array.isArray(datos) ? datos : []);
    };

    obtenerFotos();
  }, []);

  return (
    <div className="columns-5 gap-1">
      {fotos.map((dato, index) => (
        <Carta Url={dato.urls.regular} key={index} />
      ))}
    </div>
  );
}
