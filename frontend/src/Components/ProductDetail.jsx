import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {

    const [Data, SetData] = useState([]);
   
   
   
  async function Ab() {
    const req = await fetch("http://localhost:5000/Get");
    const res = await req.json();
    console.log(res);
    SetData(res);
  }
  useEffect(() => {
    Ab();
   
   
  }, []);
    
  let storage = JSON.parse(localStorage.getItem('Data'))


  

   
 
   
  return (
    <div className='w-[100%]  rounded-xl h-[93vh] flex justify-around items-center flex-col md:flex-row ' style={{backgroundImage:'url(https://cdn.dribbble.com/users/1539273/screenshots/15083620/media/96387f70b3ce7fa319110d4c0db05c8e.gif)',backgroundRepeat:'no-repeat',backgroundSize:'100% 100vh'}} >
        <div className='w-[80%] sm:w-[40%] h-[40vh] bg-[#89cff0ad] rounded-xl flex justify-center items-center '>
            <img className='w-[90%] h-[40vh] rounded-xl' src={storage.imgdata} alt="" />
            

        </div>
        <div className='w-[80%] sm:w-[40%] mt-5 h-[40vh] bg-[#89cff0ad] rounded-xl flex justify-around flex-col '>
            <div className='flex justify-center  items-center' >

<h1 className='text-2xl cursor-pointer'>Name:</h1>

<h1 className='text-2xl text-pink-600 cursor-pointer ml-4'>{storage.rname}</h1>
</div>
            <div className='flex justify-center  items-center' >

<h1 className='text-xl cursor-pointer'>Category:</h1>

<h1 className='text-xl text-pink-600 cursor-pointer ml-4'>{storage.address}</h1>
</div>
            <div className='flex justify-center  items-center' >

<h1 className='text-xl cursor-pointer'>Orders:</h1>

<h1 className='text-xl text-pink-600 cursor-pointer ml-4'>{storage.somedata}</h1>
</div>
            <div className='flex justify-center  items-center' >

<h1 className='text-xl cursor-pointer'>Rating:</h1>

<h1 className='text-xl text-pink-600 cursor-pointer ml-4'>{storage.rating}</h1>
</div>
            <div className='flex justify-center  items-center' >

<h1 className='text-2xl cursor-pointer'>Price:</h1>

<h1 className='text-2xl text-pink-600 cursor-pointer ml-4'>{storage.price}</h1>
</div>

            </div>
       
     
    </div>
  )
}
