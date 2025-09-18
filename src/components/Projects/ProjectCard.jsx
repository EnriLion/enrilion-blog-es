import { useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// This will be our modal component that renders outside the main card
const MaintenanceModal = ({ show, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) onClose(); // Close on ESC key
    };
    
    if (show) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Bajo Mantenimiento</h2>
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          <p>La estoy retocando para que luzca mucho mejor</p>
          <p>Porfavor regresa pronto.</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.primaryButton} onClick={onClose}>
            ¡Ok!
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleButtonClick = (buttonType, event) => {
    if ((buttonType === "demo" && demo === "not available") || 
        (buttonType === "source" && source === "not available")) {
      event.preventDefault();
      setModalMessage(`The ${buttonType} for ${title} is currently under maintenance.`);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <img 
          src={getImageUrl(imageSrc)} 
          alt={`Image of ${title}`} 
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a 
            href={demo === "not available" ? "#" : demo} 
            onClick={(e) => handleButtonClick("demo", e)} 
            className={`${styles.link} ${demo === "not available" ? styles.disabledLink : ''}`}
          >
            Demo
          </a>
          <a 
            href={source === "not available" ? "#" : source} 
            onClick={(e) => handleButtonClick("source", e)} 
            className={`${styles.link} ${source === "not available" ? styles.disabledLink : ''}`}
          >
            Source
          </a>
        </div>
      </div>
      
      {/* This modal will be rendered outside the card container */}
      <MaintenanceModal show={showModal} onClose={handleCloseModal} message={modalMessage} />
    </>
  );
};