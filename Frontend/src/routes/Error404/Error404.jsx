/* eslint-disable prettier/prettier */
import style from "./Error404.module.scss"
import react from "react"
import imgError from "../../assets/Error404.png"


export default function Error404(){
    return(
        <div className={style.imgErrorDiv}>
            <div>
                <img src={imgError} alt="Error 404" className={style.imgError} />
                <p className={style.textError}>Upssss... Esta página no esta disponible</p>
            </div>
        </div>
    )
}