import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";

export default function Eventos() {
    return(
        <main className={"bg-amber-50 h-screen w-screen font-rubik"}>
            <Navbar/>
            <section className="bg-white p-6 rounded-lg shadow-md mt-20 mr-10 ml-10 text-black">
                <h1 className="text-3xl font-bold mb-6">EVENTOS ACTIVOS</h1>
                <div className="evento mb-6">
                    <div className="evento-info flex-1 pr-4">
                        <h2 className="text-xl font-bold mb-2">Conversatorio: La importancia de la mujer STEAM en la
                            sociedad.</h2>
                        <p><strong>Invita:</strong> Universidad EAFIT</p>
                        <p><strong>Tipo de Evento:</strong> Acceso Libre</p>
                        <p><strong>Fecha y Hora:</strong> Mar 26 - 17:30 - Bloque 19</p>
                        <div className="mt-2">
                            <a href="#" className="text-blue-500 hover:underline mr-4">Asistir</a>
                            <a href="#" className="text-blue-500 hover:underline">Me interesa</a>
                        </div>
                    </div>
                    <div className="evento-imagen flex-none">
                        <Image src={"/eventos/evento1.webp"} alt="Conversatorio STEAM" width={360} height={120} className="rounded-lg"/>
                    </div>
                </div>
                <div className="evento">
                    <div className="evento-info flex-1 pr-4">
                        <h2 className="text-xl font-bold mb-2">Ponencia: Inteligencia Artificial Generativa aplicada a
                            la educación</h2>
                        <p><strong>Invita:</strong> Institución Universitaria Pascual Bravo</p>
                        <p><strong>Tipo de Evento:</strong> Acceso a comunidad SINERGIA</p>
                        <p><strong>Fecha y Hora:</strong> Abr 15 - 12:30 - Teatro La Convención</p>
                        <div className="mt-2">
                            <a href="#" className="text-blue-500 hover:underline mr-4">Asistir</a>
                            <a href="#" className="text-blue-500 hover:underline">Me interesa</a>
                        </div>
                    </div>
                    <div className="evento-imagen flex-none">
                        <Image src={"/eventos/evento2.webp"} alt="Ponencia IA Generativa" width={360} height={120}
                               className="rounded-lg"/>
                    </div>
                </div>
            </section>
        </main>
    )
}