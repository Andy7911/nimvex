import React, { useRef } from 'react'
import emailJS from 'emailjs-com'
import Image from 'next/image';
import imgContact from '../../public/img/contact-img.png';
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    debugger;
    e.preventDefault();
    emailJS.sendForm(
      'service_9oi3cu5',
      'template_4f8wx6n',
      form.current,
      'nXCMM40Ud1T_nXRHB'

    ).then((result) => {
      console.log('Message envoyé avec succès !');
    }, (error) => {
      console.log('Échec de l\'envoi du message : ' + error.text);
    });


  }
  return (
    <div className='contact'>
      <div className='contact__title'>
      <h2>Contact Us</h2>
      <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p></div>
    <form id='myform' ref={form} onSubmit={sendEmail}>
      <div className='contact__left'>
        <div className='input_content'>
        <label>
          Name
        </label>
        <input  name='name' type='text' placeholder='Message' />
        </div>
        <div className='input_content'>
        <label>
          Email
        </label>
        <input  name='email' type='text' placeholder='email' />
        </div>
        <div className='input_content'>
        <label>
          Message
        </label>
        <textarea name="message" required />
        </div>
        <button className='primary-btn' type="submit">Envoyer</button>
      </div>
      <div className='contact__right'>
        <Image src={imgContact} height={648}/>
      </div>
    </form></div>
  )
}
