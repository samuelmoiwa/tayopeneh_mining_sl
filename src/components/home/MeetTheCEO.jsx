import React from "react";
import ceo from '../../image/ceo.png'

const HealthReadMore = () => {
  return (
    <>
      <section class="bg-gray-100 border-b py-8 mt-16" id="about">
        <div class="container max-w-5xl mx-auto m-8">
          <div className="text-center py-2 flex flex-col items-center justify-center">
            <h2 className="text-5xl text-center font-bold mb-5 text-gray-700">
                Meet the CEO
            </h2>
            <div className="w-16 h-1 bg-orange-500 mt-0" data-aos="fade-right">
              {" "}
            </div>
          </div>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row"
            data-aos="fade-up"
          >
            <div class="w-full sm:w-1/2 p-6">

            <div className="py-2 flex flex-col mb-2">
                <p
                className="text-5xl font-bold leading-none sm:text-7xl
                text-gray-500 my-6'"
                >
                Osman <br/> <span className="ml-20"> Kamara </span>
                </p>
            </div>
              <p class="text-gray-600 mb-8 text-justify">
                    the visionary leader at the helm of Tayopeneh Mining. As the Chief Executive Officer, Mr. Kamara
                    brings a wealth of experience and a deep commitment to the company's mission.
                <br />
                <br />
                    With a career spanning several decades in the mining industry, Osaman Kamara has played a pivotal
                    role in Tayopeneh's journey to becoming a global mining powerhouse. His leadership has been
                    instrumental in steering the company toward excellence in the exploration and production of gold,
                    diamonds, and minerals.
                <br />
                <br />
                    Mr. Kamara's unwavering dedication to value creation, coupled with his visionary approach, has
                    positioned Tayopeneh as an industry leader. Under his guidance, the company has expanded its
                    footprint and made significant strides in shaping the future of mining on a global scale.
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <img class="w-full rounded" src={ceo} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthReadMore;
