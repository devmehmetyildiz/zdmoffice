import React from 'react'
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className='w-[100%]  mx-auto flex flex-col justify-center items-center mt-12'>
      <h1 className='text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#3d3d3d] font-semibold'>GET IN  <span className='text-[#c5a47e]'>TOUCH</span></h1>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col items-start justify-center'>
          <p>+7 (212) 654-33-35</p>
          <p>+7 (212) 287-85-22</p>
          <p>info@goarch.com</p>
          <p>USA, New York, 57 Quigley Bridge</p>
        </div>
        <div className='flex  flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className='text-[1em] rounded-md text-[#666666] bg-[#f3f3f3] border-[#f3f3f3] border-2 h-1/2 m-2 p-2' placeholder='Name' />
            <input className='text-[1em] rounded-md text-[#666666] bg-[#f3f3f3] border-[#f3f3f3] border-2 h-1/2 m-2 p-2' placeholder='Email*' />
          </div>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className='text-[1em] rounded-md text-[#666666] bg-[#f3f3f3] border-[#f3f3f3] border-2 h-1/2 m-2 p-2' placeholder='Phone' />
            <input className='text-[1em] rounded-md text-[#666666] bg-[#f3f3f3] border-[#f3f3f3] border-2 h-1/2 m-2 p-2' placeholder='Company' />
          </div>
          <div className='h-[100%]'>
            <input className='text-[1em] rounded-md text-[#666666] bg-[#f3f3f3] border-[#f3f3f3] border-2 h-[100%] m-2 p-2' placeholder='Message' />
          </div>
        </div>
      </div>
      <button className='shadow-lg hover:shadow-none shadow-[#c5a47e] rounded-3xl  flex flex-row justify-center items-center px-4 py-4 transition-all ease-in-out duration-1000 bg-[#c5a47e] hover:bg-[#cb9c67]'>SEND
          <FontAwesomeIcon className=' text-[#fff] text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
        </button>
    </div>
  )
}
