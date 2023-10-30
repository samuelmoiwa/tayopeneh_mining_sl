
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import featured_projects from '../../image/feture_projects.jpg'
import { Link } from 'react-router-dom'

const FeaturedProjects = () => {
    const back = '/'
  return (
    <div div className='w-screen flex flex-col justify-center items-center'>

        <div className=' w-10/12 mt-5 sm:mt-28'>
            <img class="w-full sm:h-96 rounded" src={featured_projects} alt="image" />
        </div>

        <div className="py-2 flex flex-col mb-2 mt-8 w-10/12">
            <p
            className="text-4xl font-bold leading-none sm:text-5xl
            text-gray-500 my-6'"
            >
                FEATURED PROJECTS
            </p>
            <div className="w-16 h-1 bg-orange-500 mt-2" data-aos="fade-right">
            </div>
        </div>

        <div className="py-2 flex flex-col mb-2 w-10/12">
            <p
            className="text-2xl font-bold leading-none sm:text-3xl
            text-gray-500 my-6'"
            >
                Making an Impact on Mining
            </p>
        </div>

        <p className='sm:w-3/5 w-10/12 text-lg text-gray-600 mt-10 mb-4'>
            At Tayopeneh Mining, we don't just mine; we innovate, we create, and we make a lasting impact on the mining
            industry and the world. Our featured projects represent our unwavering commitment to making a positive
            difference in mining practices, environmental stewardship, and community well-being. <br/><br/>

            Each project we undertake is more than an exploration or extraction; it's a catalyst for progress.
            We believe that mining can coexist harmoniously with the environment and uplift the
            communities where we operate. <br/><br/>

            Our projects have a far-reaching impact on mankind's development and prosperity. Whether it's pioneering
            environmentally-friendly mining techniques, implementing advanced technologies to enhance safety,
            or actively engaging with local communities to improve livelihoods, our work extends beyond
            traditional mining boundaries. <br/><br/>

            We understand that responsible mining is not just a choice but a necessity for the sustainable future of
            our planet. Our dedication to sustainable practices is reflected in every project we undertake. We strive
            to minimize our environmental footprint, conserve natural resources, and protect ecosystems. <br/><br/>

            Feel free to explore our latest projects and witness firsthand how Tayopeneh Mining is leading the way in
            redefining the mining industry. Each project is a testament to our commitment to responsible, ethical, and
            innovative mining practices. <br/><br/>

            Join us in making an impact on mining, on communities, and on the world. Together, we can create a future
            where mining plays a pivotal role in shaping a sustainable and prosperous world for generations to come.


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

export default FeaturedProjects

