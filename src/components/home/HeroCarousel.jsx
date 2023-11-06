import React from 'react'
import { Carousel } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { Link } from 'react-router-dom';

import carousel_1 from "../../image/carousel_1.jpg"
import carousel_2 from "../../image/carousel_2.jpg"
import carousel_3 from "../../image/carousel_3.jpg"
import carousel_4 from "../../image/carousel_4.jpg"

const HeroCarousel = () => {


  const CustomFlowbiteTheme  = {
    root: {
      "base": "relative h-full w-full",
      "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      "active": {
        "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-white dark:bg-gray-800"
      },
      "base": "h-3 w-3 rounded-full",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      "wrapper": "w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    control: {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    scrollContainer: {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  };


  return (
    <Flowbite theme={{ theme: CustomFlowbiteTheme  }}>
      <Carousel className='h-screen w-screen '
        slideInterval={8000}
      >

        <div className="flex flex-col h-screen w-screen justify-center dark:text-white
          bg-cover bg-center bg-no-repeat px-5"
          style={{ backgroundImage: `url(${carousel_1})` }}
        >

          <h1 className='font-extrabold sm:text-9xl text-5xl sm:ml-20'>
            TRUSTED <br/> MINING <be />  INDUSTRY <br /> LEADERS
          </h1>

          <Link
            to='#'
            className="inline-block px-2 py-2 border border-orange-500
              text-orange-500 hover:bg-orange-500 w-64 sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-bold text-4xl justify-center items-center text-center
              "
          >
            Read More
          </Link>

        </div>

        <div className="flex h-screen w-screen flex-col justify-center dark:text-white
          bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${carousel_2})` }}
        >

          <h1 className='font-extrabold sm:text-9xl text-5xl sm:ml-20'>
            CUTTING <br/> EDGE <be /><br /> TECHNOLOGIES
          </h1>

          <Link
            to='#'
            className="inline-block px-2 py-2 border border-orange-500
              text-orange-500 hover:bg-orange-500 w-64 sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-bold text-4xl justify-center items-center text-center
              "
          >
            Read More
          </Link>

        </div>

        <div className="flex h-screen w-screen flex-col justify-center dark:text-white
          bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${carousel_3})` }}
        >

          <h1 className='font-extrabold sm:text-9xl text-5xl sm:ml-20'>
            NATURAL <br/> RESOURCE <be /> <br/>  FOR YOUR <br /> NEEDS
          </h1>

          <Link
            to='#'
            className="inline-block px-2 py-2 border border-orange-500
              text-orange-500 hover:bg-orange-500 w-64 sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-bold text-4xl justify-center items-center text-center
              "
          >
            Read More
          </Link>

        </div>

        <div className="flex h-screen w-screen flex-col justify-center dark:text-white
          bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${carousel_4})` }}
        >
          <h1 className='font-extrabold sm:text-9xl text-5xl sm:ml-20'>
            PARTNER <br/> WITH TAYOPENEH<be /> <br/>  MINING <br /> S/L LIMITED
          </h1>

          <Link
            to='/?section=partner'
            className="inline-block px-2 py-2 border border-orange-500
              text-orange-500 hover:bg-orange-500 w-72 sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-bold text-4xl justify-center items-center text-center
              "
          >
            Partner with us
          </Link>
        </div>
      </Carousel>
    </Flowbite>
  )
}

export default HeroCarousel
