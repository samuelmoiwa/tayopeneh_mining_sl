import React from 'react'
import about_us from '../../image/about_us_component.jpg'
import { Link } from 'react-router-dom'

const AbutUs = () => {
  return (
    <>
         <section class="bg-gray-100 border-b py-8 mt-8" id="about">
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
              <div className="py-2 flex flex-col mb-2">
                <p
                className="text-2xl font-bold leading-none sm:text-3xl
                text-gray-500 my-6'"
                >
                  Providing the Nation with Vital Resources Since 1950
                </p>
              </div>

              <p class="text-gray-600 mb-8 text-justify">
                  With over 60 years of experience, our mining company is now a partner for numerous industrial
                  companies and enterprises all over the world.
                <br />
                <br />

                  We work to supply metalworking, chemical, construction, and other industries with the resources and
                  materials they need. If you require reliable mining solutions that provide high-quality natural
                  resources, we are ready to help you.
                <br />
              </p>
            </div>

            <div class="w-full sm:w-1/2 p-6 sm:order-first"
              data-aos="fade-right"
            >
              <div className="py-2 flex flex-col mb-2">
                <p
                className="text-4xl font-bold leading-none sm:text-5xl
                text-gray-500 my-6'"
                >
                  ABOUT US
                </p>
                <div className="w-16 h-1 bg-orange-500 mt-2" data-aos="fade-right">
                </div>
              </div>

              <div className="py-2 flex flex-col mb-2">
                <p
                className="text-2xl font-bold leading-none sm:text-3xl
                text-gray-500 my-6'"
                >
                  A Few Words About Our Tayopeneh Mining
                </p>
              </div>

                <p class="text-gray-600 mb-8 text-justify">
                  Tayopeneh is a globally renowned mining company, excelling in the exploration and production of gold,
                  diamonds, and minerals. Since our inception in 1990 and subsequent public listing in 1995, we've been
                  headquartered in the vibrant city of Freetown.
                <br />
                <br />
                  Our dedicated team of over 20,680 employees and contractors passionately drives our operations,
                  primarily located in Sierra Leone's key regions of Kono, Kenema, Bo, and Moyamba.
                <br />
                <br />
                  With a strong commitment to value creation and a focus on precious metals, Tayopeneh continues to
                  lead the way in the mining industry. Join us in our journey as we shape the future of mining worldwide.
              </p>

              <Link
              to={'/about'}
                className='bg-orange-500 hover:bg-orange-400 text-white px-14 py-4 rounded mt-5'
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export default AbutUs
