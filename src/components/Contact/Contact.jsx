import React, { useRef } from "react";
import style from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const refForm = useRef()

    const sendMail = e => {
        e.preventDefault()

        console.log(process.env)
        emailjs.sendForm(
            process.env.SERVICE_KEY,
            process.env.TEMPLATE_KEY,
            refForm.current,
            process.env.PUBLIC_KEY
        ).then(
            () => {
                alert('enviado');
                window.location.reload(false)
            },
            () => {
                alert('fallo')
            }
        )
    }

    return(
        <div className={style.container}>
            <div className={style.left}>
                <form onSubmit={sendMail} ref={refForm}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Mensaje</label>
                    <textarea name="message" />
                    <input type="submit" value="ENVIAR" />
                </form>
            </div>

            <div className={style.right}>
                <h3>Otras formas de contacto</h3>
                <div></div>
            </div>
        </div>
    )
}

export default Contact