import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import __ from '@/Hooks/useTranslation'
import { useState, useEffect } from "react";

export default function Guest({ children }) {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 979);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 979);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-dots-darker bg-center bg-white  selection:text-white">
                <div className="flex w-full h-screen">
                    {/* Primer Div con corte diagonal */}
                    <div
                        className={` ${isSmallScreen ? ("hidden") : ("bg-[#6A1036] w-[50%] relative ")}`}
                        style={{
                        clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)", // Corte diagonal
                        }}
                    >
                        {/* Contenido principal */}
                        <div className="relative flex items-center w-full h-full bg-dots-darker">
                            <div className="flex mx-[5vw]">
                                <img
                                src="../images/logoAguila.png"
                                alt="Imagen 1"
                                className="w-[15vw] object-cover"
                                />
                                <img
                                src="../images/logoLaPaz.png"
                                alt="Imagen 2"
                                className="w-[15vw] object-cover"
                                />
                            </div>
                            <p className="absolute bottom-4 text-white text-xl ml-[3vw] text-[1vw]">
                                H.XVIII AYUNTAMIENTO DE LA PAZ BAJ CALIFORNIA SUR.
                            </p>
                        </div>
                    </div>

                    {/* Segundo Div */}
                    <div className={` ${isSmallScreen ? ("w-full") : ("w-[40%]")} flex flex-col justify-center items-center px-4`}>
                        <div className="text-center">
                        <div className="uppercase font-bold text-[4.2vh]">{__('Log in')}</div>
                        <br />
                        <div className="text-[1.4vh] text-center px-[4vw]">
                            INGRESA TU USUARIO Y CONTRASEÑA, SI NO CUENTA CON UN USUARIO CONTACTA AL
                            ADMINISTRADOR
                        </div>
                        </div>
                        <div className="w-full mt-8 px-[4vw] py-4 mx-auto">{children}</div>
                    </div>
                </div>
            </div>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0, 0, 0, 0.13)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0, 0, 0, 0.13)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
