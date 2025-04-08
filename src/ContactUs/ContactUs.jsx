import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


export const ContactUs = () => {

   const refForm = useRef()
   
   
   const handleSubmit = (event) => {
      
      event.preventDefault() 

      const serviceId = 'service_b37qi9n'
      const templateId = 'template_720lgdk'
      const publicKey = 'RdvqSVSetgzdpV_4D'

      emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
      .then( result => console.log(result.text))
      .catch(error => console.error(error))
   }

  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>

      <div>
         <h2>Contact Us</h2>
         <p>Please fill out this form</p>
      </div>

      <fieldset>
         <label htmlFor="">Name</label>
         <input name='userName' type="text" placeholder='User name...' required/>
      </fieldset>

      <fieldset>
         <label htmlFor="">Email</label>
         <input name='email' type="email" placeholder='@gmail.com...' required/>
      </fieldset>

      <fieldset>
         <label htmlFor="">Message</label>
         <textarea  name='message' type="text" placeholder='message...' required/>
      </fieldset>

      <button>send</button>
      
    </form>
  )
}

