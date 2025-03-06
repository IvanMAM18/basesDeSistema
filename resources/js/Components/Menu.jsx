import React, { useState, useEffect } from 'react';

export default function Menu ( { isSmallScreen, isMenuOpen, setIsMenuOpen } ) {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Cambia el estado para mostrar/ocultar el menú
    };

    return (
        <div className={` ${isSmallScreen ? 'flex-col' : 'flex'}`}>
            {/* Menú lateral */}
            <div
                className={`fixed top-0 left-0 h-[97vh] w-[17vw] rounded-xl bg-[#6A1036] text-white transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0 m-4' : '-translate-x-full my-4'
                } ${isSmallScreen ? 'hidden' : ''}`}
            >
                {/* Botón para mostrar/ocultar el menú */}
                <button
                    onClick={toggleMenu}
                    className={`absolute top-4 ${isMenuOpen ? 'right-[-0px]' : 'right-[-80px]'} z-50 bg-[#6A1036] text-white px-2 py-2 mx-2 rounded hover:shadow hover:bg-[#9E214D]`}
                >
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
                <div className="w-full mt-20 text-center">
                    <img src="/../images/logoAguila.png" className="w-[5vw] mx-auto mb-[2vw]" />
                    <div className='text-[14px] px-2'>H.XVIII AYUNTAMIENTO DE LA PAZ B.C.S </div>
                    <div className="text-[36px] ">Gestor de Tareas</div>
                </div>
                <div className='m-[2vw]'>
                    <ul className="mt-8">
                        {/* Opciones del menú */}
                        <div className="text-[12px] text-gray-400">Apartados</div>
                        <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                            <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                            </svg>
                            Mis Proyectos
                        </li>
                        <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                            <svg
                                className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  
                                <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" />
                            </svg>
                            Mis Tareas
                        </li>
                        <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                            <svg
                                className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                                <line x1="9" y1="17" x2="15" y2="17" />
                            </svg>
                            Mis Oficios
                        </li>
                        <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                            <svg
                                className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <polyline points="21 8 21 21 3 21 3 8" />  <rect x="1" y="3" width="22" height="5" />  
                                <line x1="10" y1="12" x2="14" y2="12" />
                            </svg>
                            Mis Archivados
                        </li>
                        <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                            <svg
                                className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            Mis Notas
                        </li>
                    </ul>
                </div>
            </div>

            {/* Menú movil */}
            {isSmallScreen && (
                <div className="fixed bottom-0 left-0 right-0 bg-[#6A1036] text-white flex justify-around p-2">
                    <button className="flex flex-col items-center p-1 rounded bg-red-200">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                        </svg>
                    </button>
                    <button className="flex flex-col items-center p-1 rounded bg-red-200">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                            <rect x="9" y="3" width="6" height="4" rx="2" />
                        </svg>
                    </button>
                    <button className="flex flex-col items-center p-1 rounded bg-red-200">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        </svg>
                    </button>
                    <button className="flex flex-col items-center p-1 rounded bg-red-200">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="21 8 21 21 3 21 3 8" />
                            <rect x="1" y="3" width="22" height="5" />
                        </svg>
                    </button>
                    <button className="flex flex-col items-center p-1 rounded bg-red-200">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
