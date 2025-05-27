import React, { useState, useEffect } from 'react';

export default function Menu({ isSmallScreen, isMenuOpen, setIsMenuOpen }) {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${isSmallScreen ? 'flex-col' : 'flex'}`}>
            {/* Menú lateral */}
            <div
                className={`fixed top-0 left-0 h-full ${isMenuOpen ? 'w-[17vw]' : 'w-[4vw]'} bg-[#6A1036] text-white transition-all duration-300 ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-0'
                } ${isSmallScreen ? 'hidden' : ''}`}
            >
                {isMenuOpen ? (
                    <>
                        {/* Botón para ocultar el menú (arriba a la derecha) */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-4 right-4 z-50 bg-[#6A1036] text-white px-2 py-2 rounded hover:shadow hover:bg-[#9E214D]"
                        >
                            <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Contenido del menú abierto */}
                        <div className="w-full mt-20 text-center">
                            <img src="/../images/logoAguila.png" className="w-[5vw] mx-auto mb-[2vw]" />
                            <div className='text-[14px] px-2'>H.XVIII AYUNTAMIENTO DE LA PAZ B.C.S</div>
                            <div className="text-[36px]">Gestor de Tareas Hola</div>
                        </div>
                        <div className='m-[2vw]'>
                            <ul className="mt-8">
                                <div className="text-[12px] text-gray-400">Apartados</div>
                                <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                                    <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                                    </svg>
                                    Mis Proyectos
                                </li>
                                <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                                    <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>  
                                        <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  
                                        <rect x="9" y="3" width="6" height="4" rx="2" />  
                                        <line x1="9" y1="12" x2="9.01" y2="12" />  
                                        <line x1="13" y1="12" x2="15" y2="12" />  
                                        <line x1="9" y1="16" x2="9.01" y2="16" />  
                                        <line x1="13" y1="16" x2="15" y2="16" />
                                    </svg>
                                    Mis Tareas
                                </li>
                                <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                                    <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>  
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                                        <line x1="9" y1="9" x2="10" y2="9" />  
                                        <line x1="9" y1="13" x2="15" y2="13" />  
                                        <line x1="9" y1="17" x2="15" y2="17" />
                                    </svg>
                                    Mis Oficios
                                </li>
                                <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                                    <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="21 8 21 21 3 21 3 8" />  
                                        <rect x="1" y="3" width="22" height="5" />  
                                        <line x1="10" y1="12" x2="14" y2="12" />
                                    </svg>
                                    Mis Archivados
                                </li>
                                <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                                    <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Mis Notas
                                </li>
                                {/* Nueva opción de Configuración */}
                                <li className="text-[16px] flex items-center my-4 hover:bg-gray-700 hover:text-rose-200 cursor-pointer">
                                    <svg className="h-4 w-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    Configuración
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <div className="h-full flex flex-col items-center justify-between pt-16">
                        {/* Iconos del menú */}
                        <div className="flex flex-col items-center space-y-6">
                            {/* Logo */}
                            <img src="/../images/logoAguila.png" className="w-[3vw] mx-auto" />
                            {/* Botón para mostrar el menú (centrado y debajo de los iconos) */}
                            <button
                                onClick={toggleMenu}
                                className="bg-[#6A1036] text-white px-2 py-2 rounded hover:shadow hover:bg-[#9E214D] mx-auto"
                            >
                                <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </button>
                            
                            {/* Iconos con tooltips */}
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-700 hover:text-rose-200 rounded-full">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                                    </svg>
                                </button>
                                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#6A1036] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center">
                                    Proyectos
                                    <svg className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-700 hover:text-rose-200 rounded-full">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>  
                                        <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  
                                        <rect x="9" y="3" width="6" height="4" rx="2" />  
                                        <line x1="9" y1="12" x2="9.01" y2="12" />  
                                        <line x1="13" y1="12" x2="15" y2="12" />  
                                        <line x1="9" y1="16" x2="9.01" y2="16" />  
                                        <line x1="13" y1="16" x2="15" y2="16" />
                                    </svg>
                                </button>
                                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#6A1036] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center">
                                    Tareas
                                    <svg className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-700 hover:text-rose-200 rounded-full">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>  
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                                        <line x1="9" y1="9" x2="10" y2="9" />  
                                        <line x1="9" y1="13" x2="15" y2="13" />  
                                        <line x1="9" y1="17" x2="15" y2="17" />
                                    </svg>
                                </button>
                                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#6A1036] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center">
                                    Oficios
                                    <svg className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-700 hover:text-rose-200 rounded-full">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="21 8 21 21 3 21 3 8" />  
                                        <rect x="1" y="3" width="22" height="5" />  
                                        <line x1="10" y1="12" x2="14" y2="12" />
                                    </svg>
                                </button>
                                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#6A1036] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center">
                                    Archivados
                                    <svg className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-700 hover:text-rose-200 rounded-full">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#6A1036] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center">
                                    Notas
                                    <svg className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative group">
                                <button className="p-2 hover:bg-gray-700 hover:text-rose-200 rounded-full">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </button>
                                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#6A1036] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center">
                                    Configuración
                                    <svg className="h-3 w-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Menú móvil (sin cambios) */}
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
}