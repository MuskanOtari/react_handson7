import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav' id='nav'>
    <NavLink  id='n1' to='/' className={({isActive})=>(isActive ? "active" : "notactive")}>Home</NavLink>    
    <NavLink id='n2' to='/Students' className={({isActive})=>(isActive ? "active" : "notactive")}>Students</NavLink>    
    <NavLink id='n3' to='/ContactUs' className={({isActive})=>(isActive ? "active" : "notactive")}>ContactUs</NavLink>    
    
    </div>
  )
}

export default Navbar