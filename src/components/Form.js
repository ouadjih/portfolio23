import React from 'react'
import './Form.css'
export const Form = () => {
  return (
    <div className='form'>
        <label>Full Name*</label>
        <input className='name' name='name' type="text" placeholder='Full name'/>
        <label>Email*</label>
        <input className='email' name='email' type="email" placeholder='example@mail.com'/>
        <label>Message*</label>
        <textarea className='message' name='message' rows="4" cols="50"></textarea>
        <button className='submit'>Submit</button>
    </div>
  )
}
