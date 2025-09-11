import React from "react";

import styles from './ProfileHeading.module.css'

import { getImageUrl } from "../../utils";

export const ProfileHeading = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy Diego León</h1>
            <p className={styles.description}> Soy un Desarollador de Software
                con experiencia usando Java Spring Boot y muchos lenguajes 
                más. ¡Contáctame si estas interesado!.
            </p>
            <a href="https://wa.me/+527207239758?" className={styles.contactBtn}>Mándame un mensaje</a>
            </div>    
            <img className={styles.profileImg} src={getImageUrl("profile/profile_icon.png")} alt="Portrait of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
    ); 
};