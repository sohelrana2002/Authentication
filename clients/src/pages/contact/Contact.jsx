import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <form className="contact__form">
            <input placeholder='not' type="email" className="contact__input" />
            <textarea  id="" cols="30" rows="10"></textarea>
        </form>
    </div>
  )
}

export default Contact