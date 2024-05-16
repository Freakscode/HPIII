import Image from "next/image";
import "./Navbar.css";


export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-icons">
                    <Image src={"/Navbar/Recurso 1.webp"} alt={"icon"} width={125} height={125} />
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/eventos/">Eventos</a></li>
                    <li className="nav-item"><a href="#">Galería</a></li>
                </ul>

            </nav>
        </>
    )
}