import React from 'react'
import Slider from 'react-slick';
import img from '../../assets/img'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faSoap, faArrowLeft, faArrowRight, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const slideritems = [
    {
      img: img.project1,
      title: "RESIDENTIAL CARE PROJECT IN PARIS"
    },
    {
      img: img.project2,
      title: "CONCERT HALL IN NEW YORK"
    },
    {
      img: img.project3,
      title: "MODERN HOTEL IN LONDON"
    },
    {
      img: img.project4,
      title: "MODERN HOTEL IN LONDON"
    },
    {
      img: img.project5,
      title: "RESIDENTIAL CARE PROJECT IN PARIS"
    },
    {
      img: img.project6,
      title: "RESIDENTIAL CARE PROJECT IN PARIS"
    },
    {
      img: img.project7,
      title: "RESIDENTIAL CARE PROJECT IN PARIS"
    },
    {
      img: img.project8,
      title: "RESIDENTIAL CARE PROJECT IN PARIS"
    },

  ]

  return (
    <div className='w-[100%]  mx-auto flex flex-col justify-center items-center '>
      <h1 className='text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#3d3d3d] font-semibold'>OUR  <span className='text-[#c5a47e]'>PROJECTS</span></h1>
      <Slider className='mt-20 w-[100%]' {...settings}>
        {slideritems.map(item => {
          return <div className='relative group'>
            <h2 className='top-20 group-hover:top-40 opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 absolute left-8 w-1/2  font-Common text-[1.2em] leading-[1.75] tracking-[0.17em] text-[#fff]'>{item.title}</h2>
            <img className="group-hover:scale-150 transition-all ease-in-out duration-1000" src={item.img} alt={item.title} />
            <p className='-rotate-90 absolute bottom-0 left-0 mb-40 -ml-24 text-[10px]  font-bold whitespace-nowrap uppercase tracking-[2em] opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 text-[#fff] '>ZDM OFFICE</p>
            <div className='absolute bottom-[41%] left-[50%] transition-all ease-in-out duration-1000 -translate-y-1/2 -translate-x-1/2 p-4 group-hover:p-8 group-hover:opacity-50 rounded-full bg-[#c5a47e] opacity-0'>
              <FontAwesomeIcon className='text-[2.4vmin] text-[#fff] group-hover:opacity-1' icon={faMagnifyingGlassPlus} />
            </div>

          </div>
        })}
      </Slider>
    </div>
  )
}


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='flex flex-row flex-nowrap justify-center items-center hover:text-[#c5a47e] text-[#c5c4c2] transition-all ease-in-out duration-300 cursor-pointer'
      style={{ position: 'absolute', right: 20, bottom: '50%', zIndex: 2 }}
      onClick={onClick}
    >
      <p className='text-[1em] font-Common tracking-[0.32em]   mr-[5px]'>NEXT</p>
      <FontAwesomeIcon className=' text-[2.4vmin]  mr-[5px] ' icon={faArrowRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='flex flex-row flex-nowrap justify-center items-center hover:text-[#c5a47e] text-[#c5c4c2] transition-all ease-in-out duration-300 cursor-pointer'
      style={{ position: 'absolute', left: 20, bottom: '50%', zIndex: 2 }}
      onClick={onClick}
    >
      <FontAwesomeIcon className='  text-[2.4vmin]   ' icon={faArrowLeft} />
      <p className='text-[1em] font-Common tracking-[0.32em]   ml-[5px]'>PREV</p>
    </div>
  );
}