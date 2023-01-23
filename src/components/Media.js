import React from 'react'
import './Media.css'
import instagram from '../Assets/Images/instagram.png'
import fb from '../Assets/Images/fb.png'
import github from '../Assets/Images/github.png'
import linkedin from '../Assets/Images/linkedin.png'
export const Media = () => {
  return (
    <div className='media'>
      <div className='media-top'>
      <h2 className='Media-title'>
        Get in Touch :
      </h2>
      <p className='media-text'>You can contact me using and submitting this form or using one of the mediums below:</p>
      </div>
      
      <div className='medias-contact'>
        <img src={github} alt="github/ouadjih" className='mediael' />
        <img src={fb} alt="fb/ouadjih"  className='mediael'/>
        <img src={linkedin} alt="linked/ouadjih" className='mediael'/>
       <img src={instagram} alt="ig/ouadjih" className='mediael'/>
      </div>
    </div>
  )
}
