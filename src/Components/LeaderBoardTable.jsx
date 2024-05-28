
import React from 'react'
import '../App.css'
import Tbody from './Tbody'
import { FaShoppingBasket } from "react-icons/fa"

function LeaderBoardTable() {
  return (
    <>
    <div className='flex justify-center  '>
      <div className='  w-[90%] 	 p-2  tabl rounded-2xl '>
        
        <div className='flex justify-around '>
        <div className='text-2xl flex items-center shadow-xl'>
         <FaShoppingBasket/> Basic backtest
        </div>
        <div  className='shadow-xl timepass p-2 '>
          <span>slippage</span>
          <select name="" id="">
            <option value="">0%</option>
            <option value="">0.5%</option>
            <option value="">1%</option>
          </select>
        </div>
        </div>

        <div className=' time overflow-scroll md:overflow-auto md:m-[0] '>
          <div>
            <table   className='m-[50px] overflow-hidden  '>
              <thead className=''>
                <tr className='bg-[pink] '>
                  <th>
                    Rank
                  </th >
                  <th>Name</th>
                  <th>Calmar Ration </th>
                  <th> overall profit</th>
                  <th> AVG daily profit</th>
                  <th> wind %</th>
                  <th> price</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>
              <Tbody/>






            </table>
          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default LeaderBoardTable