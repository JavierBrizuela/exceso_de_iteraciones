/* eslint-disable prettier/prettier */
import React from "react";
import style from "./header.module.scss"
import logo from "../../assets/develmatch.png"
export default function Header() {
    return (
        <div className={style.divHeader}>
             <div className={style.divLogo}> 
                <img className={style.imgLogo} src={logo} alt="Logo Develmatch" />
               
            </div>
            <div className={style.userNameDiv}>
                <p className={style.userName}>User Name</p>
            </div>
        </div>
    );
}
