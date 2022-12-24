import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
    <h1 className='title'>404</h1>
     <h3>
        Sorry! We can't find the page you're looking for.
        Here's some ways to go that might help you:
    </h3>

    <p>Start over from the Home page <Link to='/Home'>here .</Link>
    We do our best to avoid broken links but we're not perfect. In case you find an error, please report it to the webmaster.</p>    

    </div>
  )
}
