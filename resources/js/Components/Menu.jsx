import React, { useState, useEffect } from 'react';

export default function Menu () {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Estado para controlar la visibilidad del menú
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Cambia el estado para mostrar/ocultar el menú
    };

    return (
        <div className="flex">
        {/* Menú lateral */}
        <div
            className={`fixed top-0 left-0 h-[97vh] w-1/6 rounded-xl bg-[#6A1036] text-white transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0 m-4' : '-translate-x-full my-4'
            }`}
        >
            {/* Botón para mostrar/ocultar el menú */}
            <button
                onClick={toggleMenu}
                className={`absolute top-4 ${isMenuOpen ? 'right-[-0px]' : 'right-[-80px]'} z-50 bg-[#6A1036] text-white px-4 py-4 rounded hover:shadow hover:bg-[#9E214D]`}
            >
                {isMenuOpen ? (
                    <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>
            <div className="w-full mt-20 text-center">
                <img
                    src="/../images/logoAguila.png"
                    className="w-[5vw] mx-auto mb-8"
                />
                <span>H.XVIII AYUNTAMIENTO DE LA PAZ B.C.S </span> <br />
                <span className="text-[40px]">Gestor de Tareas</span>
            </div>
            <ul className="mt-8 mx-16">
                {/* Opciones del menú */}
                <div className="text-sm text-gray-400">Apartados</div>
                <li className="flex items-center my-6 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                    <svg
                        className="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                    </svg>
                    Mis Proyectos
                </li>
                <li className="flex items-center my-6 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                    <svg
                        className="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"/>  
                        <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  
                        <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" />
                    </svg>
                    Mis Tareas
                </li>
                <li className="flex items-center my-6 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                    <svg
                        className="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                        <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                    Mis Oficios
                </li>
                <li className="flex items-center my-6 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                    <svg
                        className="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <polyline points="21 8 21 21 3 21 3 8" />  <rect x="1" y="3" width="22" height="5" />  
                        <line x1="10" y1="12" x2="14" y2="12" />
                    </svg>
                    Mis Archivados
                </li>
                <li className="flex items-center my-6 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                    <svg
                        className="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Mis Notas
                </li>
            </ul>
        </div>

        {/* Contenido principal */}
        <div
            className={`transition-all duration-300 bg-red-200 ${
                isMenuOpen ? 'ml-[25%]' : 'ml-[5%]'
            } w-full p-8`}
        >
            <h1 className="text-2xl font-bold">Contenido Principal</h1>
            <p>
                Este es el contenido principal de la página. El menú lateral puede
                mostrarse u ocultarse con el botón.
            </p>
        </div>
    </div>
    );
};
