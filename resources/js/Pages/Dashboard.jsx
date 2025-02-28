import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InfoExtraTabla from '@/Components/InfoExtraTabla';
import TablaTitulos from '@/Components/TablaTitulos';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Dashboard({ auth }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Estado para controlar la visibilidad del menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado para mostrar/ocultar el menú
  };
    return (
        <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tabla Armonizacion Contable</h2>}
        >
            <Head title="Inicio-sesion inciada"/>

            <div className="relative w-full h-screen pt-4 bg-dots-darker bg-center bg-white dark:bg-white selection:bg-red-500 selection:text-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <InfoExtraTabla></InfoExtraTabla>
                    <TablaTitulos></TablaTitulos>
                    <div className="flex">
      {/* Menú lateral */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/5 bg-gray-800 text-white transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Botón para mostrar/ocultar el menú */}
        <button
          onClick={toggleMenu}
          className={`absolute top-4 ${isMenuOpen ? 'right-0' : 'right-[-40px]'}  z-50 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600`}
        >
          {isMenuOpen ? '+' : '-'}
        </button>

        <ul className="flex h-full justify-between mt-24">
          {/* Opciones del menú */}
          <div className='w-full'>
            <div className='p-4 text-sm text-gray-400'>Apartados</div>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                <svg
                    className="h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                </svg>
                Mis Proyectos
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                <svg
                    className="h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  
                    <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" />
                </svg>
                Mis Tareas
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                <svg
                    className="h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                    <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
                Mis Oficios
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                <svg
                    className="h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                >
                    <polyline points="21 8 21 21 3 21 3 8" />  <rect x="1" y="3" width="22" height="5" />  
                    <line x1="10" y1="12" x2="14" y2="12" />
                </svg>
                Mis Archivados
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                <svg
                    className="h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Mis Notas
            </li>
          </div>
          {/* Pie del menú */}
        </ul>
      </div>

      {/* Contenido principal */}
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? 'ml-1/5 w-4/5' : 'ml-0 w-full'
        } p-8`}
      >
        <h1 className="text-2xl font-bold">Contenido Principal</h1>
        <p>
          Este es el contenido principal de la página. El menú lateral puede
          mostrarse u ocultarse con el botón.
        </p>
      </div>
    </div>
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
