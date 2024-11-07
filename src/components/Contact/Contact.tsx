import { FormEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import Modal from "../Modal/Modal";
import style from './Contact.module.css';

const Contact = () => {
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_USER_ID } = import.meta.env;
  const { t } = useTranslation('contact');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showFail, setShowFail] = useState<boolean>(false);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);

  const refForm = useRef<HTMLFormElement | null>(null)

  const sendMail = (e: FormEvent) => {
    e.preventDefault();
    setDisableBtn(true);

    emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, refForm.current!, VITE_USER_ID)
      .then(
        () => setShowSuccess(true),
        () => setShowFail(true)
      )
  }

  const closeModalSuccess = () => {
    setShowSuccess(false);
    window.location.reload();
  }

  const closeModalFail = () => {
    setShowFail(false);
    setDisableBtn(false);
  }

  return (
    <div className={style.container} id='contact'>
      <div className={style.left}>
        <h1 className={style.title}>{t('title')}</h1>
        <form onSubmit={sendMail} ref={refForm} className={style.contForm}>
          <div className={style.formTop}>
            <div className={style.formHalf}>
              <label>{t('name')}</label>
              <input required type="text" name="user_name" className={style.inputBox} />
            </div>
            <div className={style.formHalf}>
              <label>{t('email')}</label>
              <input required type="email" name="user_email" className={style.inputBox} />
            </div>
          </div>
          <div className={style.formMsg}>
            <label>{t('message')}</label>
            <textarea required name="message" className={style.inputBox} />
          </div>
          <div className={style.formBtnContainer}>
            <input type="submit" value={t('send')} className={style.formBtn} disabled={disableBtn} />
          </div>
        </form>
      </div>

      <div className={style.right}>
        <div className={style.linksContainer}>
          <span className={style.linkLabel}>LinkedIn</span>
          <a href="https://www.linkedin.com/in/sol-rom%C3%A1n-9a4b55221/" target='_blank' rel="noopener noreferrer" className={style.link}>Sol Román</a> <br />

          <span className={style.linkLabel}>Email</span>
          <a href="mailto: solroman44@gmail.com" target="_blank" rel="noopener noreferrer" className={style.link}>solroman44@gmail.com</a> <br />

          <span className={style.linkLabel}>GitHub</span>
          <a href="https://github.com/Ankara-mg" target="_blank" rel="noopener noreferrer" className={style.link} >Ankara-mg</a>
        </div>
      </div>

      <Modal isOpen={showSuccess} onClose={closeModalSuccess}>
        <h2>{t('successTitle')}</h2>
        <p>{t('successMessage')}</p>
      </Modal>

      <Modal isOpen={showFail} onClose={closeModalFail}>
        <h2>{t('failTitle')}</h2>
        <p>{t('failMessage')}</p>
      </Modal>
    </div>
  )
}

export default Contact