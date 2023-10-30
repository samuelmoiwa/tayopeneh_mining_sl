import React from 'react'

import mining_process from '../../image/mining_process.png'
import exploration_prospecting from '../../image/exploration.png'
import mineral_processing from '../../image/mining_processing.png'
import environmental_stewardship from '../../image/enviromental_stewardship.png'
import community_engagement from '../../image/community_engagement.png'
import research_development from '../../image/research_development.png'

const services = [
    {
      title: "Mining Operations",
      description:
        "Tayopeneh Mining boasts a vast workforce and state-of-the-art machinery for efficient and responsible resource extraction. ",
      img_file: mining_process,
    },
    {
      title: "Exploration and Prospecting",
      description:
        "We employ cutting-edge technology and geoscientific expertise to identify promising mineral deposits.",
      img_file: exploration_prospecting,
    },
    {
      title: "Mineral Processing",
      description:
        "We operate advanced mineral processing facilities to extract and refine precious metals and minerals.",
      img_file: mineral_processing,
    },
    {
      title: "Environmental Stewardship",
      description: `Tayopeneh Mining is committed to environmental sustainability. We employ industry-leading practices to minimize our ecological footprint.`,
      img_file: environmental_stewardship,
    },
    {
        title: "Community Engagemen",
        description: `Our community programs encompass education, healthcare, and infrastructure development, contributing to a higher quality of life for all stakeholders.`,
        img_file: community_engagement,
      },
      {
        title: "Research and Development",
        description: `We invest in ongoing research and development to improve our techniques and adopt sustainable, innovative practices.`,
        img_file: research_development,
      },

  ];

const Services = () => {
  return (
    <section className="bg-white pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10">
              {/* Title and section separator */}
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <p className="mt-2 text-3xl font-extrabold text-gray-500 sm:text-4xl">
                Tayopeneh Mining Offers
                </p>
                <div
                  className="w-16 h-1 bg-blue-500 mt-2"
                  // data-aos="fade-right"
                ></div>
              </div>

              {/* Services Grid */}
              <div className="max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {services.slice(0, 6).map((service) => (
                  // Individual service card
                  <div
                    key={service.title}
                    className="bg-gray-100 overflow-hidden shadow rounded-lg"
                    data-aos="fade-up"
                  >
                    {/* Service Image */}
                    <div className="relative flex w-full justify-center pt-3 h-48">
                      <img
                        src={service.img_file}
                        alt="Image Description"
                        height={200}
                        width={200}
                      />
                    </div>

                    {/* Service Title and Description */}
                    <div className="px-4 py-5 sm:p-4">
                      <div className="flex items-center justify-center">
                        <div className="ml-5">
                          <div className="text-lg font-bold leading-6 text-gray-900">
                            {service.title}
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Services

