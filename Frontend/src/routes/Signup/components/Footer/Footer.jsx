/* eslint-disable prettier/prettier */
import styles from "./footer.module.scss";
import react from "react";
import iconFacebook from "../../../../assets/icons8-facebook-50.png";
import  iconInstagram from "../../../../assets/icons8-instagram-24.png";
import iconTwitter from "../../../../assets/icons8-twitter-50.png";
import iconLinkedin from  "../../../../assets/icons8-linkedin-50.png";
import iconMail from "../../../../assets/icons8-mail-50.png";
import iconYoutube from "../../../../assets/icons8-mail-50.png"
export default function Footer (){
    return (
        <div className={styles.footer}>
        <div className={styles.socialMedia}>
        <div className={`${styles.line} ${styles.leftLine}`}></div>
            <div className={styles.socialMediaLogos} >
                <img src={iconFacebook} alt="Icono Facebook" className={styles.imgIcon}/>
                <img src={iconInstagram} alt="Icono Instagram"  className={styles.imgIcon}/>
                <img src={iconTwitter} alt="Icono Twitter"  className={styles.imgIcon}/>
                <img src={iconLinkedin} alt="Icono LinkedIn"  className={styles.imgIcon}/>
                <img src={iconMail} alt="Icono Mail"  className={styles.imgIcon}/>
                <img src={iconYoutube} alt="Icono YouTube"  className={styles.imgIcon}/>
            </div> 
            <div className={`${styles.line} ${styles.rightLine}`}></div>
        </div>
       <div className={styles.politicalInfo}>
            <img/>
            <p className={styles.copyright}>Copyright© 2024 Develmatch</p>
            <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
</a>

             {/*<p className={styles.legalLink}>Información legal | Política de privacidad</p>*/}

    </div> 
    </div>
    )
}