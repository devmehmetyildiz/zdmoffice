import React from 'react'
import img from '../../assets/img'

export default function About() {
  return (
    <div className='w-[100%] lg:w-[60%] mx-auto flex flex-col justify-center items-center '>
      <h1 className='text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#3d3d3d] font-semibold'>ABOUT <span className='text-[#c5a47e]'>GO.ARCH</span></h1>
      <div className='flex flex-col mt-6  lg:flex-row justify-center items-center'>
        <div className='flex flex-col w-1/2 lg:w-1/3 justify-center items-center'>
          <h2 className='leading-[1.1] font-Common font-bold text-[#3d3d3d] text-[1.8em]'>we turn ideas into works of art<span className='text-[#c5a47e]'>.</span></h2>
          <p className='mt-4 text-[1em] leading-[1.65] text-[#747474]'>For each project we establish relationships with partners who we know will
            help us create added value for your project. As well as bringing together
            the public and private sectors, we make sector-overarching links to gather
            knowledge and to learn from each other. The way we undertake projects is based
            on permanently applying values that reinforce each other: socio-cultural value,
            experiental value, building-technical value and economical value.</p>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/3 justify-center items-center px-8'>
          <h2 className='leading-[1.1] w-[100%] text-center font-Common font-bold text-[#3d3d3d] text-[1.8em] mt-4 lg:mt-0'>our specialization<span className='text-[#c5a47e]'>:</span></h2>
          <div className='mt-4 flex flex-col justify-center items-center'>
            <img className='mb-4 w-1/4 py-2' src={img.iconArchitecture} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#3d3d3d] tracking-[0.2em] font-Common'>ARCHITECTURE</p>
            <img className='my-4 w-1/4 py-2' src={img.iconInteriors} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#3d3d3d] tracking-[0.2em] font-Common'>INTERIORS</p>
            <img className='my-4 w-1/4 py-2' src={img.iconPlanning} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#3d3d3d] tracking-[0.2em] font-Common'>PLANING</p>
          </div>
        </div>
        <img className='w-1/2 lg:w-1/3 p-4' src={img.portfolio} />
      </div>
    </div>
  )
}
