import React from "react";
import { getImageUrl } from "../../utils";

import styles from './Contact.module.css'

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Reach out!</h2>
            <p>Get in touch with me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="https://wa.me/+527207239758?">
                   <img src={getImageUrl("contact/whatsapp.svg")} alt="Whatsapp icon" /> 
                   </a>
                <a href="https://wa.me/+527207239758?">@DiegoLeon</a>
                </li>
            <li className={styles.link}><a href="https://www.linkedin.com/in/diego-leon-/"><img src={getImageUrl("contact/linkedin.svg")} alt="Linkedin" /> </a><a href="https://www.linkedin.com/in/diego-leon-/">linkedin.com/diego-leon-</a></li>
            <li className={styles.link}><a href="https://github.com/EnriLion"><img src={getImageUrl("contact/github.svg")} alt="Github icon" /> </a><a href="https://github.com/EnriLion">github.com/EnriLion</a></li>
        </ul>
    </footer>;
}