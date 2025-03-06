import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Menu from '@/Components/Menu';
import InfoExtraTabla from '@/Components/InfoExtraTabla';
import TablaTitulos from '@/Components/TablaTitulos';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function Dashboard({ auth }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Estado para controlar la visibilidad del menú
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 999);
        useEffect(() => {
                const handleResize = () => {
                setIsSmallScreen(window.innerWidth <= 999);
            };
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, []);
    return (
        <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tabla Armonizacion Contable</h2>}
        >
            <Head title="Inicio-sesion inciada"/>

            <div className="relative w-full h-screen pt-4 bg-dots-darker bg-center bg-white dark:bg-white selection:bg-red-500 selection:text-white">
                <Menu isSmallScreen={isSmallScreen} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></Menu>
                {/* Contenido principal */}
                <div
                    className={`transition-all duration-300 bg-red-200 
                        ${isSmallScreen ? 'w-full ml-0' : (isMenuOpen ? 'ml-[20%]' : 'ml-[8%]')}`}
                >
                    <h1 className="text-2xl font-bold">Contenido Principal</h1>
                    <p>
                        Este es el contenido principal de la página. El menú lateral puede
                        mostrarse u ocultarse con el botón.
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
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
