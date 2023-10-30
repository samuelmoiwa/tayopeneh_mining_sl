
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import diamond from '../../image/diamond.jpg'
import { Link } from 'react-router-dom'


const NaturalResources = () => {
    const back = '/'
  return (
    <div div className='w-screen flex flex-col justify-center items-center'>

        <div className=' w-10/12 mt-5 sm:mt-28'>
            <img class="w-full sm:h-96 rounded" src={diamond} alt="image" />
        </div>

        <div className="py-2 flex flex-col mb-2 mt-8 w-10/12">
            <p
            className="text-4xl font-bold leading-none sm:text-5xl
            text-gray-500 my-6'"
            >
                NATURAL RESOURCES
            </p>
            <div className="w-16 h-1 bg-orange-500 mt-2" data-aos="fade-right">
            </div>
        </div>

        <div className="py-2 flex flex-col mb-2 w-10/12">
            <p
            className="text-2xl font-bold leading-none sm:text-3xl
            text-gray-500 my-6'"
            >
                Reliable Mining Services
            </p>
        </div>

        <p className='sm:w-3/5 w-10/12 text-lg text-gray-600 mt-10 mb-24'>
            In the world of natural resource extraction, Tayopeneh Mining stands as a beacon of excellence in delivering
            the required resources to fuel economic growth and development. With a rich history in the mining industry,
            we are dedicated to sourcing and providing a diverse array of natural resources, including metals, coal,
            gold, gemstones, limestones, chalk, and many more. <br/><br/>

            Metals: From essential industrial metals like iron, aluminum, and copper to precious metals like gold and
            silver, Tayopeneh Mining plays a vital role in ensuring a steady supply of these resources for various
            industries worldwide. These metals are the building blocks of modern infrastructure and technology. <br/><br/>

            Coal: As a significant source of energy, coal continues to be a crucial natural resource. Tayopeneh Mining
            responsibly extracts and delivers coal to meet the energy demands of communities and industries while
            implementing environmentally conscious practices. <br/><br/>

            Gold and Gemstones: The allure of gold and gemstones transcends time. Our expertise in mining these valuable
            resources allows us to contribute to the creation of exquisite jewelry, investment opportunities, and
            economic prosperity in regions blessed with these treasures. <br/><br/>

            Limestones and Chalk: Limestones and chalk are fundamental materials in construction and agriculture.
            They are essential for manufacturing cement, agricultural lime, and a variety of industrial applications.
            Tayopeneh Mining ensures the availability of these resources for infrastructure development
            and agriculture. <br/><br/>

            At Tayopeneh Mining, our commitment extends beyond resource extraction. We prioritize responsible and
            sustainable mining practices, ensuring minimal environmental impact and maximum community benefit. We
            engage with local communities, create job opportunities, and support education and healthcare initiatives. <br/><br/>

            By choosing Tayopeneh Mining as your partner, you're not only gaining access to a wide range of natural
            resources but also contributing to responsible resource management and sustainable development. Join us in
            harnessing the earth's treasures to build a better, more prosperous future for all. <br/><br/>

        </p>

        <Link
            className='bg-orange-500 text-white text-2xl px-20 py-3 mb-10'
            to={back}
        >
            Back
        </Link>

    </div>
  )
}

export default NaturalResources

