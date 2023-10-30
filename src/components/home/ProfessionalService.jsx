/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import prof_service from '../../image/prof_service.jpg'
import { Link } from 'react-router-dom'

const ProfessionalService = () => {
    const back = '/'
  return (
    <div div className='w-screen flex flex-col justify-center items-center'>

        <div className=' w-10/12 mt-5 sm:mt-28'>
            <img class="w-full sm:h-96 rounded" src={prof_service} alt="image" />
        </div>

        <div className="py-2 flex flex-col mb-2 mt-8 w-10/12">
            <p
            className="text-4xl font-bold leading-none sm:text-5xl
            text-gray-500 my-6'"
            >
                PROFESSIONAL SERVICE
            </p>
            <div className="w-16 h-1 bg-orange-500 mt-2" data-aos="fade-right">
            </div>
        </div>

        <div className="py-2 flex flex-col mb-2 w-10/12">
            <p
            className="text-2xl font-bold leading-none sm:text-3xl
            text-gray-500 my-6'"
            >
                Delivering Required Resources
            </p>
        </div>

        <p className='sm:w-3/5 w-10/12 text-lg text-gray-600 mt-10 mb-24'>
            At Tayopeneh Mining, we take immense pride in our unwavering commitment to delivering reliable and
            comprehensive mining services that cover every facet of mine development, exploration, and feasibility.
            With decades of experience in the industry, we've earned a stellar reputation for excellence. <br/><br/>

            Our team of seasoned experts, hailing from diverse backgrounds in geology, engineering, and environmental
            science, combines cutting-edge technology with extensive industry knowledge to provide tailored solutions
            that precisely meet the unique needs of our clients. Whether you're embarking on a new mining project,
            expanding existing operations, or seeking to optimize efficiency, our professional and multidisciplinary
            approach ensures success at every step of the journey. <br/><br/>

            Our wide range of services includes conducting thorough geological surveys to identify valuable resources,
            precise resource estimation to maximize your mining potential, meticulous mine planning that optimizes
            productivity and minimizes costs, and comprehensive environmental impact assessments that prioritize
            sustainability. We're not just dedicated to profit; we're dedicated to preserving the environment we work
            in. Our commitment to sustainable practices means we adhere to strict safety standards and continually seek
            ways to minimize our environmental footprint. <br/><br/>

            At Tayopeneh Mining, quality is the cornerstone of everything we do. We rigorously monitor and control
            every aspect of our operations to ensure that we meet and exceed industry standards. Efficiency is also a
            paramount concern, and we constantly strive to streamline processes to maximize your returns. <br/><br/>

            Furthermore, our ethical mining practices are at the core of our values. We believe in responsible mining
            that benefits both our clients and the communities in which we operate. We engage with local communities,
            providing employment opportunities and supporting local development initiatives. We also prioritize fair
            labor practices and maintain transparency in our operations. <br/><br/>

            With Tayopeneh Mining by your side, you can trust in our dedication to quality, efficiency, and ethical
            mining practices. Join us in redefining the mining industry and unlocking the full potential of your mining
            endeavors. Together, we can create a sustainable and prosperous future for the mining sector.
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

export default ProfessionalService

