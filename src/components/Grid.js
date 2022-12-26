import React from 'react'
import './Grid.css'
import Projects from './data'

export const Grid = () => {
  return (
    <div class="grid">
    <input class="search" placeholder='Type here to search...'/>
    <div class="cardgrid">
    {
           Projects.map((p)=>
            <div className='card'>
                <img className='card-img' src={p.src} alt="card"/>
                <div className='card-info'>
                <div className='card-title'>
                    {p.title}
                </div>
                {/*<div className='card-description'>
                    {p.description}
                </div>*/}

                </div>

            </div>
            )
        }
    </div>
</div>
  )
}
