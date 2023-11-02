/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import engineers from '../../image/engineers_about_us.jpg'
import gold_ore from '../../image/gold_ore.jpg'
import engineers_our_goals from '../../image/engineers-handheld_shot.jpg'
import woman_fild from '../../image/woman_field.jpg'


const consultants = [
    {
      button: 'ABOUT US',
      id: 1,
      name: 'A FEW WORDS ABOUT US',
      description:
        `Tayopeneh is a globally renowned mining company, excelling in the exploration and production of gold, diamonds,
         and minerals. Since our inception in 1990 and subsequent public listing in 1995, we've been headquartered in
         the vibrant city of Freetown. Our dedicated team of over 2,680 employees and contractors passionately drives
         our operations, primarily located in Sierra Leone's key regions of Kono, Kenema, Bo, and Moyamba.
        `,
      image: engineers,
    },
    {
      button: 'OUR MISSION',
      id: 2,
      name: 'Tayopeneh Mining Mission',
      description:
        `To be a beacon of excellence in the global mining landscape, setting unparalleled standards in the discovery
        and stewardship of precious metals and minerals. At Tayopeneh Mining, we envision a world where our operations
        not only drive economic growth but also contribute positively to the communities and environments in which we
        operate. As we continue to grow and evolve, we aim to inspire trust, respect, and sustainability in every facet
        of our work, anchoring our legacy in the heart of Sierra Leone and beyond.`,
      image: gold_ore,
    },
    {
      button: 'OUR GOALS',
      id: 3,
      name: 'Tayopeneh Mining Goals',
      description:
        `Strive to responsibly explore, mine, and extract gold, diamonds, and minerals while minimizing environmental
        impact and preserving the ecosystems in Sierra Leone.
        Achieve and maintain the highest standards of safety, efficiency, and productivity in all mining operations,
        ensuring the well-being of our employees and contractors.
        Collaborate with local communities to create shared value, supporting education, healthcare, and economic
        opportunities in the regions where we operate.
        Continue to be a pioneering force in the mining industry, setting benchmarks for ethical and sustainable
        practices, technology adoption, and resource management.`,
      image: engineers_our_goals,
    },
    {
        button: 'COMPANY VALUES',
        id: 4,
        name: 'Tayopeneh Mining Values',
        description:
          `We uphold the highest ethical standards, promoting transparency and honesty in all our actions and decisions.
          We are dedicated to responsible resource management, ensuring our mining practices are environmentally
          sustainable for future generations.
          We are committed to delivering the highest quality products and services, meeting and exceeding the
          expectations of our customers and stakeholders.
          We actively engage with and support the local communities where we operate, fostering positive relationships
          and creating shared value.
          `,
        image: woman_fild,
      },
    // Add more consultants here
  ];

const FewWordsAboutUs = () => {

    const [activeConsultant, setActiveConsultant] = useState(1);

  const toggleConsultant = (id) => {
    if (activeConsultant === id) {
      setActiveConsultant(null); // Toggle off if already active
    } else {
      setActiveConsultant(id); // Activate the selected consultant
    }
  };


  return (
    <section className="bg-white pb-10 pt-5 mt-2" id="ourExperts">
    <div className="container max-w-8xl mx-auto m-8">

      <div
        className="flex flex-col-reverse sm:flex-row"
      >
        <div className="w-full sm:w-3/4 flex flex-wrap flex-col-reverse ">
            {consultants.map((consultant) => (
            <div
                key={consultant.id}
                className={`w-full p-6 px-5 flex flex-col items-center justify-center ${
                activeConsultant === consultant.id ? '' : 'hidden'
                }`}
            >
                <h2 className="text-3xl text-start text-gray-700 font-bold mt-2">
                {consultant.name}
                </h2>
                <p className="text-gray-600 xl:text-sm text-sm mb-8 text-justify max-w-3xl mt-5">
                {consultant.description}
                </p>
            </div>
            ))}

            <div className="w-full sm:order-first flex flex-col items-center">
            {consultants.map((consultant) => (
                <div
                key={consultant.id}
                className={`w-10/12 flex justify-center ${
                    activeConsultant === consultant.id ? '' : 'hidden'
                }`}
                >
                <img
                    className=" sm:w-10/12 w-full sm:h-96 h-full"
                    src={consultant.image}
                    alt="image"
                />
                </div>
            ))}
            </div>
        </div>

        <div className="flex-row md:flex-row mb-10 sm:w-1/4 w-full">
            <h2 className="text-2xl font-bold mb-5 ml-2 sm:ml-0 text-gray-700">
            20+ YEARS OF <br/> EXPERIENCE
            </h2>
            {consultants.map((consultant) => (
            <Link
                key={consultant.id}
                to="#"
                className={`inline-block ${
                activeConsultant === consultant.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-500'
                } md:w-auto w-full px-8 py-4 hover:text-white transition
                duration-300 ease-in-out font-md text-sm justify-center items-center text-center
                flex flex-col border-b
                `}
                onClick={() => toggleConsultant(consultant.id)}
            >
                {consultant.button}
            </Link>
            ))}
        </div>

      </div>
    </div>
  </section>
  )
}

export default FewWordsAboutUs
