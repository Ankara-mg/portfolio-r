import React, { useRef } from "react";
import style from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const refForm = useRef()

    const sendMail = e => {
        e.preventDefault()

        emailjs.sendForm(
            'service_n0xtaho',
            'template_wol4fj5',
            refForm.current,
            'oyqXx2UTi0X9Vl6m1'
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
                <h1 className={style.title}>Envíame un Mensaje</h1>
                <form onSubmit={sendMail} ref={refForm} className={style.contForm}>
                    <div className={style.formTop}>
                        <div className={style.formHalf}>
                            <label>Nombre</label>
                            <input type="text" name="user_name" />
                        </div>
                        <div className={style.formHalf}>
                            <label>Email</label>
                            <input type="email" name="user_email" />
                        </div>
                    </div>
                    <div className={style.formMsg}>
                        <label>Mensaje</label>
                        <textarea name="message" />
                    </div>
                    <div className={style.formBtnContainer}>
                        <input type="submit" value="ENVIAR" className={style.formBtn} />
                    </div>
                </form>
            </div>

            <div className={style.right}>
                <h1 className={style.title}>Otras formas de contacto: </h1>
                <div className={style.linksContainer}>
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/sol-rom%C3%A1n-9a4b55221/" target='_blank' rel="noopener noreferrer">Sol Román</a>

                    <span>Email</span>
                    <a href="mailto: solroman44@gmail.com" target="_blank" rel="noopener noreferrer" >solroman44@gmail.com</a>

                    <span>GitHub</span>
                    <a href="https://github.com/Ankara-mg" target="_blank" rel="noopener noreferrer" >Ankara-mg</a>
                </div>
            </div>
        </div>
    )
}

export default Contact