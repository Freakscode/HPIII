import React from 'react';
import Navbar from '@/components/Navbar/Navbar'; // Assuming Navbar is located in components/Navbar

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col bg-blue-600">
            <Navbar />
            <main className="flex flex-col items-start justify-start flex-1 w-full text-left p-10">
                <h1 className="text-6xl font-bold text-white">Bienvenido a HËRON</h1>
                <p className="mt-4 text-2xl text-white">La plataforma de Networking estudiantil que necesitabas</p>
                <section className="bg-white bg-opacity-50 backdrop-blur-lg text-gray-800 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row mt-10 w-full">
                    <div className="w-full lg:w-1/2 pr-4 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold mb-2">Conectando Estudiantes a través de Eventos</h1>
                        <p className="text-base lg:text-lg">
                            Nuestra plataforma está diseñada para generar espacios de interacción y conexión entre
                            estudiantes de diversos ámbitos.
                            A través de nuestra Web App, puedes registrarte como Organizador para crear y gestionar
                            eventos, o como Asistente para
                            participar y relacionarte con otros estudiantes antes del evento. ¡Únete a nosotros y
                            expande tu red de contactos!
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mt-4 lg:mt-0">
                        <img src="/Inicio/img1.webp" alt="Conexión Social" className="rounded-lg"/>
                        <img src="/Inicio/img2.webp" alt="Registro de Usuarios" className="rounded-lg"/>
                        <img src="/Inicio/img3.webp" alt="Creación de Eventos" className="rounded-lg"/>
                        <img src="/Inicio/img4.webp" alt="Foro de Conversación" className="rounded-lg"/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Page;