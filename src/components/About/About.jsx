import React from "react";
import styles from './AboutHeading.module.css'
import { getImageUrl  } from "../../utils";

export const About = () => {
    // return <section>
    //     <h2>About</h2>
    //     <div><img src= " alt=" /></img></div>
    // </section>
    return (
        <section className={styles.container} id="acerca">
            <h2 className={styles.title}>Aprende más acerca de mi</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/profile_image.png")} alt="Me with a laptop"  className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/server_icon.png")} alt="Server icon"  className={styles.abIconImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Desarollador Backend</h3>
                        <p> Soy un Desarollador Backend con experiencia
                            en la creación de RESTful APIs y Microservicios
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor_icon.png")} alt="Cursor icon"  className={styles.abIconImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Desarollador Frontend</h3>
                        <p> Tengo experiencia en la creación de sitios
                            y aplicaciones dinámicos y responsivos
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/ui_icon.png")} alt="UI icon"  className={styles.abIconImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Diseñador UI</h3>
                        <p> He diseñado  muchas aplicaciones , sitios web
                            y  magníficos diseños de sistemas
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};