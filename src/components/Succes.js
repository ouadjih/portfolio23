import React, { useEffect, useState } from 'react'
import { Hero } from './Hero';

export const Succes = () => {

    const [sent, setSent] = useState(true);
    const style = {
        display:'flex',
        alignItem:'center',
        justifyContent:'center'
    }
    useEffect(()=>{
        setTimeout(()=>setSent(false), 3000);
    },[sent])
   
    if (sent) {
        return (
          <div className={style}>
            Email sent successfuly <br/>
            redirecting to home page
          </div>
        )
      }else{
      return(
        <div className='Home'>
          <Hero/>
        </div>
        )
      
    }

}
