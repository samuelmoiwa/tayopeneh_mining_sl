import React from 'react'
import about_hero from '../../image/about_hero.jpg'

const Banner = () => {
  return (
    <div className="bg-gray-100 w-full">
        <div
            className="
            w-full bg-cover bg-no-repeat h-96
            align-middle justify-center
            flex-col
            flex items-center text-center"
            style={{ backgroundImage: `url(${about_hero})` }}
        >
            <h1 className="text-white text-6xl font-bold text-center">Contact Us</h1>
        </div>
    </div>
  )
}

export default Banner

