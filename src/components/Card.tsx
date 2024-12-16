import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
  <>
  <div className='w-full bg-red-600 h-28 text-3xl text-center flex-col text-white items-center flex justify-center'>
   <h1 className='text-4xl'>ASSIGNEMNT  10  SIR  ALI JAWWAD </h1> 
   <p className=' text-3xl'>RAMESHA JAVED</p>
   <p className='text-2xl'>sunday 2 to 5</p>
    
  </div>
 
  <div className="flex flex-col  items-center md:flex-row lg:flex-row    justify-around  flex-wrap bg-black">
 
  <div className="lg:w-3/12 w-9/12 md:w-5/12 bg-purple-100 shadow-lg shadow-red-700 mb-20 p-2 border-gray-300 border-2">
  <div className='flex justify-center'>
  <Image
  src='/c.jpg' 
  alt='A fish image' 
  width={300} 
  height={300} 
/>
</div>

  <p className="text-center text-red-600 font-bold pt-4">FRIED CHICKEN</p>
  <div className="flex justify-center items-center my-3">
    <button className="lg:px-4 lg:py-2 px-2 py-2  bg-orange-500 text-white rounded-md hover:bg-red-600 text-xs">Buy Now</button></div></div>




  <div className="lg:w-3/12 w-9/12 md:w-5/12 bg-purple-100 shadow-lg shadow-red-700 mb-20 p-2 border-gray-300 border-2">
  <div className='flex justify-center'>
  <Image
  src='/roll.png' 
  alt='A fish image' 
  width={300} 
  height={300} 
/>
</div>

  <p className="text-center text-red-600 font-bold pt-4">BEEF ROLL</p>
  <div className="flex justify-center items-center my-3">
    <button className="lg:px-4 lg:py-2 px-2 py-2  bg-orange-500 text-white rounded-md hover:bg-red-600 text-xs">Buy Now</button></div></div>





 
    <div className="lg:w-3/12 w-9/12 md:w-5/12 bg-purple-100 shadow-lg shadow-red-700 mb-20 p-2 border-gray-300 border-2">
    <div className='flex justify-center'>
  <Image
  src='/kabab2.jpg' 
  alt='A fish image' 
  width={300} 
  height={300} 
/>
</div>

  <p className="text-center text-red-600 font-bold pt-4">KABAB</p>
  <div className="flex justify-center items-center my-3">
    <button className="lg:px-4 lg:py-2 px-2 py-2  bg-orange-500 text-white rounded-md hover:bg-red-600 text-xs">ORDER NOW</button></div></div>


  </div>
  </>
  )
}

export default Card
