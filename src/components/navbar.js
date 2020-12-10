import React from 'react'
import { NavLink } from "react-router-dom"

export default function navbar(props) {
   return (
       <div className='navbar-wrapper'>
           <NavLink to="/">Add URL</NavLink>
           <NavLink to="/all-urls">All URLs</NavLink>
       </div>
   )
}