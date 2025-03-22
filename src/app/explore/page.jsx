"use client";  // Evita el error de hidratación

import { useEffect, useState } from "react";
import Carta from "@/components/carta.jsx";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Page() {
    const [documentos, setDocumentos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            const querySnapshot = await getDocs(collection(db, "productos"));
            const docs = querySnapshot.docs.map((doc) => doc.data());
            setDocumentos(docs);  // Ahora los datos solo se obtienen en el cliente
        };

        obtenerProductos();
    }, []);

    return (
        <div>
            <div className="columns-5">
                {documentos.length > 0 ? (
                    documentos.map((doc, index) => (
                        <Carta url={doc.url} key={index} />
                    ))
                ) : (
                    <p>No se encontraron imágenes.</p>
                )}
            </div>
        </div>
    );
}
