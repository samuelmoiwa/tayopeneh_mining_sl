import React from 'react'
import about_us from '../../image/service1.jpg'

const AbutUs = () => {
  return (
    <>
         <section class="bg-gray-100 border-b py-8" id="about">
        <div class="container max-w-5xl mx-auto m-8">

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row"
          >
            <div class="w-full sm:w-1/2 p-6"
              data-aos="fade-left"
            >
              <div className="py-2 flex flex-col mb-2">
                <p
                className="text-4xl font-bold leading-none sm:text-5xl
                text-gray-500 my-6'"
                >
                  20+ years of experience
                </p>
              </div>

              <img class="w-full rounded" src={about_us} alt="image" />
            </div>

            <div class="w-full sm:w-1/2 p-6 sm:order-first"
              data-aos="fade-right"
            >
              <div className="py-2 flex flex-col mb-2">
                <p
                className="text-4xl font-bold leading-none sm:text-5xl
                text-gray-500 my-6'"
                >
                  Tayopeneh <br/> Services
                </p>
                <div className="w-16 h-1 bg-orange-500 mt-2" data-aos="fade-right">
                </div>
              </div>

              <div className="py-2 flex flex-col mb-2">
                <p
                className="text-2xl font-bold leading-none sm:text-3xl
                text-gray-500 my-6'"
                >
                  Welcome to Tayopeneh Mining,
                </p>
              </div>

                <p class="text-gray-600 mb-8 text-justify">
                where we bring decades of experience and expertise to the exploration and extraction of valuable
                resources. Our commitment to excellence, sustainability, and innovation drives our comprehensive
                range of services in the mining industry. Explore the diverse services we offer:

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AbutUs
