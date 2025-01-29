import React, { useState } from "react";


import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <a className={styles.tittle} href="/">Portfolio</a>

            <div className={styles.menu}>
                
                {/* {menuOpen ? (<img src={"closeIcon.png"} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />) : (<img src={"menuIcon.png"} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />)} */}
                
                <img 
                    src={menuOpen ? "/closeIcon.png" : "/menuIcon.png"} 
                    alt="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn}
                />

                <ul
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}