import React, {useEffect} from 'react'

import blog_1 from '../../image/blog1.jpg'
import blog_2 from '../../image/blog2.jpg'

import { Link } from 'react-router-dom';



const Blog = () => {

    const services = [
        {
            title: "The Golden Pursuit: Unveiling the Fascinating World of Gold Mining",
            description:
            `Gold, an element that has captured the human imagination for centuries, continues to play a central role
            in our global economy. At Tayopeneh Mining, we've had the privilege of being part of this fascinating world
            for over three decades. In this blog post, we'll take you on a journey through the enchanting realm of gold
            mining, exploring its allure, impact, and our commitment to responsible practices.`,
            image: blog_1,
        },
        {
            title: "How Tayopeneh Mining is Combatting Deforestation in Our Community",
            description:
            `In the heart of Sierra Leone, where lush forests have long been a source of life and livelihood,
            deforestation has become a growing concern. At Tayopeneh Mining, we recognize our responsibility
            not only to extract valuable resources but also to protect the environment we call home. In this blog post,
            we'll share the efforts we've undertaken to combat deforestation and promote sustainable forestry practices
            within our local community.`,
            image: blog_2,
        },

      ];

  return (
    <div className="mt-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="max-w-7xl mx-auto flex flex-wrap lg:justify-between justify-center items-center">
            {services.map((service) => (
              <div
              key={service.title}
              className="overflow-hidden shadow rounded-lg w-blog-width mb-10 lg:mb-4"
            >
              <div className="relative h-48">
              <img
              alt='blog'
                 src={service.image}
                className='w-full h-48'
              />

              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {service.title}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {service.description}
                    </dd>
                  </div>
                </div>
              </div>
              <div className='w-full flex mb-5 ml-11'>
                <Link
                className='bg-orange-500  hover:bg-orange-400 px-5 py-2 rounded text-white'
              >
                Read More
              </Link>
              </div>

            </div>
            ))}
          </div>
        </div>
      </div>

  )
}





export default Blog
