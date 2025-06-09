import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link"
import ServerInfo from "../ServerInfo/ServerInfo"

export const dynamic = 'force-dynamic';
export default function CardProfile() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row">
            <div className="profile-left bg-orange-500 flex flex-col justify-center items-center 
            p-6 md:w-[35%] md:rounded-tr-full md:rounded-br-full md:h-full">
               <Image
                    src="/images/perfil.jpeg"
                    alt="Mi foto de perfil"
                    width={200}
                    height={200}
                    className="rounded-full"
               />
               <div className="text-center text-black">
                    <h2 className="text-3xl font-bold">Erik Carcelén</h2>
                    <h3>Estudiante de Sistemas y Gestión de Data</h3> 
                    <Link href="/">
                        Volver al Inicio
                    </Link>
               </div>   
            </div>

            <div className="profile-right md:w-[60%] md:mx-auto">
                <div className="content p-8 w-[80%] mx-auto">
                    <p className="text-center text-[1.3em]">
                        Soy estudiante de Sistemas y Gestion de Data y tengo pasión por los datos y la inteligencia artificial
                    </p>
                    <div className="socilas mt-[30px]">
                        <ul className="w-[80%] mx-auto p-10 mt-6">
                            <li className="h-[40px] flex items-center">
                                <FaLinkedin className="text-[18px] md:text-[2rem]  text-orange-500 inline-block"/>
                                <Link href="https://www.linkedin.com/in/erik-andres/"
                                    target="_blank"
                                    className="text-[0.8rem] md:text-[1.4rem] inline-block ml-4">
                                    Erik Carcelén
                                </Link>
                            </li>
                            <li className="h-[40px] flex items-center mt-6">
                                <FaGithub className="text-[18px] md:text-[2rem] text-orange-500 inline-block"/>
                                <Link href="https://github.com/erikanndres"
                                    target="_blank"
                                    className="text-[0.8rem] md:text-[1.4rem] inline-block ml-4">
                                    @erikanndres
                                </Link>
                            </li>
                            <li className="h-[40px] flex items-center mt-6">
                                <FaEnvelope className="text-[18px] md:text-[2rem] text-orange-500 inline-block"/>
                                <Link href="mailto:erik.carcelen@ister.edu.ec"
                                    className="text-[0.8rem] md:text-[1.4rem] inline-block ml-4"
                                    target="_blank">
                                    erik.carcelen@ister.edu.ec
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="serverinfo w-[80%] mx-auto text-center
                    p-5 rounded-lg mt-[80px] bg-[#ffa50066]
                    ">
                        <ServerInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
}