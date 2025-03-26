'use client'
import { auth } from "@/firebase/config";
import useToast from "@/hooks/useToast";
import { useUserStore } from "@/store/userStore";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Formulario2() {

    const [email, setEmail] = useState(null);
    const [contraseña, setContraseña] = useState(null);

    const { loginUser } = useUserStore()

    const { exito, errorToast } = useToast()

    const router = useRouter()

    const loginUser2 = async () => {
        try {
            const respuesta = await signInWithEmailAndPassword(auth, email, contraseña)
            console.log(respuesta)
            loginUser(respuesta.user)
            exito("Iniciaste sesion exitosamente")
        } catch (error) {
            console.log(error)
        }
    }

    const provider = new GoogleAuthProvider();

    const iniciarConGoogle = async (e) => {
        e.preventDefault()
        try {
            const response = await signInWithPopup(auth, provider)
            console.log(response)
            loginUser(response.user)
            exito("Iniciaste sesion exitosamente")
            router.push('/perfil')
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        loginUser2()
    }

    return (
        <form className="flex flex-col mx-[30%] gap-6 p-6 border rounded-lg shadow-md">
          
             <h2 className="text-lg font-bold text-center">Iniciar sesion</h2> 

            <input onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 px-3 py-2 rounded-lg" placeholder="Ingresa tu email" type="email" />

            <input onChange={(e) => setContraseña(e.target.value)} className="border border-gray-400 px-3 py-2 rounded-lg" placeholder="Ingresa tu contraseña" type="password" />

            <button onClick={handleClick} className="bg-red-500 py-2 rounded-2xl font-bold text-white">Iniciar sesion</button>

            <button onClick={iniciarConGoogle} className="bg-blue-500 py-2 rounded-2xl font-bold text-white hover:bg-blue-600 transition">Iniciar con google</button>
        </form>
    )
}
