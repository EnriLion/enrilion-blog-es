import React from "react";
import styles from './AboutHeading.module.css'
import { getImageUrl  } from "../../utils";

export const About = () => {
    // return <section>
    //     <h2>About</h2>
    //     <div><img src= " alt=" /></img></div>
    // </section>
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Learn more about me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/profile_image.png")} alt="Me with a laptop"  className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/server_icon.png")} alt="Server icon"  className={styles.abIconImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience
                            in building RESTful APIs and Microservices
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor_icon.png")} alt="Cursor icon"  className={styles.abIconImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p> I have experience developing and well 
                            suited applications and sites
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/ui_icon.png")} alt="UI icon"  className={styles.abIconImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p> I have designed several applications,
                            websites and beautiful design systems
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};