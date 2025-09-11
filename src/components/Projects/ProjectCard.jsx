import React, { useState} from "react";

import styles from "./ProjectCard.module.css"

import { getImageUrl } from "../../utils";

export const ProjectCard = ({project : {title, imageSrc, description, skills, demo , source} }) => {
    const [showCard, setShowCard] = useState(false);
    
    const handleButton = (buttonType, event) => {
        if ((buttonType === "demo" && demo === "not available") || 
        (buttonType === "source" && source === "not available")) {
            event.preventDefault(); 
            setShowCard(true); 
        }
   };

    const handleClose = () => {
        setShowCard(false);
    }
    
    return (<div className={styles.container}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>{
                        skills.map((skill, id) => {
                         return(<li key={id} className={styles.skill}>{skill}</li>
                        )})
                        }
                    </ul>
                    <div className={styles.links}>
                        <a href={demo} onClick={() => handleButton("demo", event)} className={styles.link}>Demo</a>
                        <a href={source} onClick={() => handleButton("source", event)} className={styles.link}>Source</a>
                    </div>
                    {showCard && (
                        <div style={styles.card}>
                            <h2>Under maintenance</h2>
                            <p>I'm tweaking it </p>
                            <button onClick={handleClose}>Close</button>
                        </div>
                    )}
            </div>
    );
};