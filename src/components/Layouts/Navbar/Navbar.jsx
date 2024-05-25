import React from 'react'
import { ItemNavbar } from '../../ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
      <nav className='w-3/4 h-full flex'>
          <ul className='w-full flex justify-center items-center '>
              <ItemNavbar route='/' content='Welcome' />
              <ItemNavbar route='/calculator' content='Calculator' />
              <ItemNavbar route='/randomcolor' content='RandomColor' />
              <ItemNavbar route='/taskmanager' content='TaskManager' />
              <ItemNavbar route='/userregistration' content='UserRegistration' />
          </ul>
      </nav>
  )
}
