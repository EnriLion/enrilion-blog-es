import React, {useState} from "react";


import styles from './Navbar.module.css'
// import { getImageUrl, getImageUrl } from "../../utils";
import { getImageUrl } from "../../utils";



export  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <a  className={styles.title} href='/'>
        Mi Portafolio
        </a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} src={
                menuOpen? getImageUrl("nav/open_menu.png")
                : getImageUrl('nav/close_menu.png')}
                 alt="menu-button"
                 onClick={()=> setMenuOpen(!menuOpen)}
                 />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li>
                <a href="#acerca">Acerca de mi</a>
            </li>
            <li>
                <a href="#experiencia">Experiencia</a>
            </li>
            <li>
                <a href="#proyectos">Proyectos</a>
            </li>
            <li>
                <a href="#contactame">Contáctame</a>
            </li>
        </ul>
        </div>
    </nav>
}