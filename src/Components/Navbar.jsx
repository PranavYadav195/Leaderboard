
import React from 'react';

import { MdLeaderboard } from "react-icons/md";

import img from '../assets/logo.png'
function Navbar() {
  return (
    <>
    <header className='shadow-xl w-full' >
      <nav className='w-[90%]  m-auto flex justify-between items-center '>
        <div className=''>
          <img className='w-[100px] h-[50px] shadow-sm' src={img} alt="" />


        </div>
        <div className='flex items-center border-slate-950	
         '>
        <MdLeaderboard  className=' border-black	w-5 h-5'/>LEADERBOARD

        </div>
      </nav>
    </header>
    
   
   
    </>
  )
}

export default Navbar