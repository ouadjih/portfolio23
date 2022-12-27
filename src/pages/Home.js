import React, { useState,useEffect } from 'react'
import { Hero } from '../components/Hero';
import  Loader  from '../components/Loader'
const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(()=>setLoading(false), 1000);
 
  if (loading) {
    return (
      <main>
        <Loader/>
      </main>
    )
  }else{
  return (
    <div className='Home'>
      <Hero/>
    </div>
  )
}
}

export default Home;
