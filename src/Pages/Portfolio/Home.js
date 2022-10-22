import React from 'react'
import img from "../../assets/img"
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {

  return (
    <div className='relative z-0 h-auto'>
      <div className='bg-[#f6f5f3] flex flex-col justify-center items-center absolute z-40 left-0 top-0 w-[40vmin] h-[40vmin] p-[4.8vmin 2em 4.8vmin] text-center transition-all'>
        <a className='font-Common font-bold text-[4vmin] line-none text-[#3d3d3d]'>
          go
          <span className='text-[#c5a47e]'>.</span>
          arch
        </a>
        <div className='flex flex-row mt-[8vmin] font-Common'>
          <span className='text-[8vmin] tracking-widest leading-none text-[#c5a47e]'>01</span>
          <span className='mr-[0.4em] tracking-widest leading-none text-[2vmin] text-[#3d3d3d] align-top'>/</span>
          <span className='text-[#3d3d3d] tracking-widest leading-non text-[2vmin] align-top'>03</span>
        </div>
      </div>
      <div className='top-[44vmin] absolute left-[25vmin] flex flex-row justify-center items-center'>
        <div className='flex flex-row justify-center items-center hover:text-[#c5a47e] text-[#c5c4c2] transition-all ease-in-out duration-300 cursor-pointer'>
          <FontAwesomeIcon className=' text-[2.4vmin]  mr-[5px] opacity-25' icon={faArrowLeft} />
          <p className=' text-[1em]  font-Common tracking-[0.32em]  mr-[4vmin]'>PREV</p>
        </div>
        <div className='flex flex-row justify-center items-center hover:text-[#c5a47e] text-[#c5c4c2] transition-all ease-in-out duration-300 cursor-pointer'>
          <p className=' text-[1em] font-Common tracking-[0.32em]   mr-[5px]'>NEXT</p>
          <FontAwesomeIcon className='  text-[2.4vmin]  mr-[2vmin] opacity-25' icon={faArrowRight} />
        </div>
      </div>
      <div className='top-[44vmin]  text-[#fff] w-1/3 absolute  right-[2vmin] md:right-[10vmin] lg:right-[25vmin] flex flex-col justify-center items-center'>
        <h1 className='sm:text-lg md:text-xl lg:text-6xl text-right tracking-widest leading-[1.3em]'>CONCERT HALL IN NEWYORK</h1>
        <p className='font-semibold mt-12 text-[16px] lg:text-[18px] text-right'>Concert Hall is the archtiecture of a new generation, a building that exist not only in the dimension of space,
          but also in the dimension of time and communication
        </p>
        <div className='mt-12 w-[100%] flex justify-end'>
          <button className=' rounded-3xl  flex flex-row justify-center items-center px-4 py-4 transition-all ease-in-out duration-300 bg-[#c5a47e] hover:bg-[#d5a47e]'>LOOK MORE
            <FontAwesomeIcon className='  text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className='h-[100vh] w-[19.735vmin] z-30  absolute left-0 top-0 bg-[#f6f5f3]'>
        <div className='flex flex-col justify-center items-center bottom-0 z-10  absolute left-0 w-[100%]'>
          <p className='-rotate-90 mb-20 text-[10px] font-bold whitespace-nowrap uppercase tracking-[1em] font-Common text-[#3d3d3d] '>ZDM OFFICE</p>
          <div className='h-[5vmin] mt-[3.8vmin] w-[1px] bg-[#c5c4c2]' />
          <FontAwesomeIcon className='hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' icon={faSoap} />
          <FontAwesomeIcon className='hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' icon={faSoap} />
          <FontAwesomeIcon className='hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' icon={faSoap} />
          <FontAwesomeIcon className='hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] my-[3.8vmin] ' icon={faSoap} />
        </div>
      </div>
      <div className='absolute lg:left-[25%] md:left-[35%] sm:left-[45%] top-[11vmin] w-[60%] flex flex-row justify-between items-center'>
        <p className='font-Common font-light text-[0.75em] tracking-[0.22em] text-[#fff]'>+7 (212) 674-25-10</p>
        <div className=' sm:hidden md:hidden lg:flex flex-row justify-center items-center  font-light text-[0.75em]  cursor-pointer tracking-[0.22em]'>
          <a className='text-[#fff] mr-[8vmin] hover:text-[#c5a47e] font-Common'>HOME</a>
          <a className='text-[#fff] mr-[8vmin] hover:text-[#c5a47e] font-Common'>ABOUT US</a>
          <a className='text-[#fff] mr-[8vmin] hover:text-[#c5a47e] font-Common'>PROJECTS</a>
          <a className='text-[#fff] mr-[8vmin] hover:text-[#c5a47e] font-Common'>BLOG</a>
          <a className='text-[#fff] mr-[8vmin] hover:text-[#c5a47e] font-Common'>CONTACTS</a>
        </div>
      </div>
      <img className='w-[100vw]  h-[100vh] left-0 top-0 z-10' src={img.slide1}></img>
    </div>
  )
}
