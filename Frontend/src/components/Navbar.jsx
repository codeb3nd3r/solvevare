import React from 'react';
import { useState } from 'react';
import { solvevare,solve,close , logo ,menu,logo2 } from '../assets/assets/index.js';
import {navLinks} from  '../constants/index.js';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (

    <nav id='navbar' className=' w-full flex py-6 justify-between items-center navbar '>
      <img src={solvevare} alt="" className='w-[120px] h-[105px] pt-9'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0': 'mr-5'} text-white mr-10`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center align-top">
          <img src={toggle ? close : menu } alt='menu' className='w-[28px] h-[28px] object-contain '
          onClick={()=>settoggle((prev)=>!prev)}/>
      </div>
      <div className={`${toggle ? 'flex' : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul>
          <ul className='list-none flex flex-col  justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0': 'mb-4'} text-white mr-10`}>
            <a onClick={()=>settoggle((prev)=>!prev)} href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
          </ul>
      </div>
    </nav>
  )
}
export default Navbar