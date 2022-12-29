import React,{useState} from 'react'
import { send } from 'emailjs-com'
import './Form.css'
import { Navigate, useNavigate } from 'react-router-dom';


export const Form = () => {
  const navigate = useNavigate()
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'ouadjih',
    reply_to: '',
    message: '',
  });
 
  const onSubmit = (e) => {
   e.preventDefault()
    send(
      'service_2trrgk2',
      'template_4ifqtjc',
      toSend,
      'erfIUp1PB6F2QR8Uz'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        navigate('/Succes')
        
      })
      .catch((err) => {
        console.log('FAILED...', err)
      });
      
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form className='form' onSubmit={onSubmit}>
        <label>Full Name*</label>
        <input className='name' name='from_name' type="text" placeholder='Full name'  value={toSend.from_name}
    onChange={handleChange}/>
        <label>Email*</label>
        <input className='email' name='reply_to' type="email" placeholder='example@mail.com'  value={toSend.reply_to}
    onChange={handleChange}/>
        <label>Message*</label>
        <textarea className='message' name='message' rows="4" cols="50"  value={toSend.message}
    onChange={handleChange}/>
        <button type="submit" className='submit'>Submit</button>
    </form>
  )
}
