import React from 'react'
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center mt-12'>
      <h1 className='text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#3d3d3d] font-semibold'>GET IN  <span className='text-[#c5a47e]'>TOUCH</span></h1>
      <div className='w-[100%] px-[18%] mt-20 flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex h-[100%] tracking-wide whitespace-nowrap pt-8  p-2 m-2 flex-col items-start justify-center text-[1.125em] text-[#747474] max-h-[7em] leading-[1.7]'>
          <p>+7 (212) 654-33-35</p>
          <p>+7 (212) 287-85-22</p>
          <p>info@goarch.com</p>
          <p>USA, New York, 57 Quigley Bridge</p>
        </div>
        <div className='flex  flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className=' h-[3em] text-[1em]  rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#c5a47e]  m-2 p-2' placeholder='Name' />
            <input className='h-[3em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#c5a47e]  m-2 p-2' placeholder='Email*' />
          </div>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className='h-[3em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#c5a47e]  m-2 p-2' placeholder='Phone' />
            <input className='h-[3em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#c5a47e]  m-2 p-2' placeholder='Company' />
          </div>
          <div className='h-[100%]'>
            <input className='h-[7em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#c5a47e]  m-2 p-2' placeholder='Message' />
          </div>
        </div>
      </div>
      <div className='w-[100%] px-[23%] my-4 flex flex-row justify-center lg:justify-end items-end'>
        <button className='mt-4  shadow-lg hover:shadow-none shadow-[#c5a47e] rounded-3xl text-[#fff] flex flex-row justify-center items-center px-4 py-4 transition-all ease-in-out duration-1000 bg-[#c5a47e] hover:bg-[#cb9c67]'>SEND
          <FontAwesomeIcon className=' text-[#fff] text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
        </button>
      </div>
      <div className='flex my-12 flex-row justify-between items-center w-[100%] px-[23%]'>
        <a className='font-Common font-bold cursor-pointer text-[4vmin] line-none text-[#3d3d3d]'>
          go
          <span className='text-[#c5a47e]'>.</span>
          arch
        </a>
        <a className='font-Common  text-[12px] line-none cursor-pointer text-[#d0d0d0] hover:text-[#c5a47e]'>
         by Murren20
        </a>
        <p className='font-Common  text-[12px] line-none text-[#d0d0d0] cursor-default'>
        ?? go.arch 2016. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
