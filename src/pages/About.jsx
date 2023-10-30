import React from 'react'
import Banner from '../components/about/Banner'
import FewWordsAboutUs from '../components/about/FewWordsAboutUs'
import WhatClientsSay from '../components/about/WhatClientsSay'
import Blog from '../components/about/Blog'

function About() {
  return (
    <>
      <Banner />
      <FewWordsAboutUs />

      <section class="bg-gray-100 pb-10 pt-0 sm:mt-7 pt-4 mt-0" id="ClientsSayAboutUs">
        <div class="container max-w-8xl mx-auto m-8">

          <div
            class="flex flex-wrap flex-col sm:flex-row-reverse"
          >

            <div class="w-full sm:w-1/2 p-6
              px-5 flex flex-col justify-center"
            >

              <h2 className='sm:text-8xl text-7xl text-gray-700 font-bold mt-2'>
                What Our
                Clients Say
                About Us?
              </h2>
            </div>

            <div class="w-full sm:w-1/2 sm:order-first flex justify-center items-center bg-blue-50">
              < WhatClientsSay />
            </div>

          </div>
        </div>
      </section>

      <section class="bg-white pb-10 pt-5 mt-10" id="whoWeAre">
        <div class="container max-w-8xl mx-auto m-8">
          <h3 className='text-2xl text-orange-500 mt-4 text-center'>
            BLOG
          </h3>
          <h2 className='text-3xl text-center font-bold mb-5'>
            Last News
          </h2>

        <Blog />

        </div>
      </section>

    </>
  )
}





export default About
