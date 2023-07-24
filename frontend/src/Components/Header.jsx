import React from 'react'
import { Link} from 'react-router-dom'



export default function Header() {
 
  return (
    <div className='w-[100%] h-[7vh]  bg-amber-400 shadow-xl shadow-black flex justify-between items-center'>
        <h1 className='text-xl animation duration-100 hover:scale-105 cursor-pointer hover:text-purple-500 font-serif ml-5 font-semibold'>FoodMato</h1>
        <img onClick={()=>{
          window.location.href='http://localhost:3000'
        }} className='w-[4%] rounded-full animation duration-100 hover:scale-110 hover:shadow-2xl hover:shadow-black cursor-pointer' src="https://qph.cf2.quoracdn.net/main-qimg-9af243706c9ecc574736e4330d8eee96.webp" alt="" />
        




        <h1 onClick={()=>{
          window.location.href='http://localhost:3000/Cart'
        }}  className='text-xl animation duration-100 hover:scale-105 cursor-pointer mr-5 hover:text-purple-500 font-serif font-semibold'>Cart</h1>










      
    </div>
  )
}
