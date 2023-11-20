import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import mohamed from '../../image/mohamed_kamara.png';
import hassan from '../../image/hassan.png'
import alice from '../../image/alice.png'
import phone from '../../asset/icon_phone.svg';
import mailBox from '../../asset/icon_mail.svg';

const consultants = [
  {
    button: 'Chief Geologist',
    id: 1,
    name: 'Mohamed kamara',
    specialization: 'Geologist Specialist',
    description:
      `When it comes to questions about geological exploration, mineral deposits, or exploring potential mining sites,
      Mohamed Kamara, our Chief Geologist, is the expert you need. With over two decades of experience in the field,
      Mohamed's knowledge and insights are truly invaluable. He's the go-to person for all your geological inquiries
      and discussions about mining opportunities.`,
    phone: '+232 +232 72 448 158',
    email: 'mkamara@gmail.com',
    image: mohamed,
  },
  {
    button: 'Environmental Compliance Manager',
    id: 2,
    name: 'Hassan Koroma',
    specialization: 'Environmental Compliance Specialist',
    description:
      `For inquiries related to environmental sustainability, compliance with environmental regulations, or initiatives
      to minimize the ecological footprint of our mining operations, reach out to Hassan Koroma, our Environmental
      Compliance Manager.`,
    phone: '+224 611 87 95 91',
    email: 'hkoroma@gmail.com',
    image: hassan,
  },
  {
    button: 'Investor Relations Director',
    id: 3,
    name: 'Alice kamanda',
    specialization: 'Investor Relations Specialist',
    description:
      `If you're an investor or shareholder interested in Tayopeneh's financial performance, corporate strategy, or
      have questions about our stock, Alice kamanda, our Investor Relations Director, is available to assist you.`,
    phone: '+232 00 000 000',
    email: 'akamanda@gmail.com',
    image: alice,
  },
  // Add more consultants here
];

const OurExperts = () => {

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
        <h2 className="text-5xl text-center font-bold mb-5 text-gray-700">
          Our Dedicated Experts
        </h2>

        <div className="flex-col md:flex-row mb-10">
          {consultants.map((consultant) => (
            <Link
              key={consultant.id}
              to="#"
              className={`inline-block ${
                activeConsultant === consultant.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-300 text-gray-700 hover:bg-orange-500'
              } md:w-auto w-full px-8 py-4 h-fit sm:ml-4 hover:text-white rounded transition
              duration-300 ease-in-out font-md text-sm justify-center items-center text-center`}
              onClick={() => toggleConsultant(consultant.id)}
            >
              {consultant.button}
            </Link>
          ))}
        </div>

        <div
          className="flex flex-wrap flex-col-reverse sm:flex-row-reverse expert-div"
        >
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className={`w-full sm:w-1/2 p-6 px-5 flex flex-col justify-center ${
                activeConsultant === consultant.id ? '' : 'hidden'
              }`}
            >
              <h2 className="text-3xl text-gray-700 font-bold mt-2">
                {consultant.name}
              </h2>
              <h3 className="text-2xl text-orange-500 mt-4">
                {consultant.specialization}
              </h3>
              <p className="text-gray-600 xl:text-2xl text-sm mb-8 text-justify max-w-2xl mt-5">
                {consultant.description}
              </p>
            </div>
          ))}
          <div className="w-full sm:w-1/2 sm:order-first flex flex-col items-center">
            {consultants.map((consultant) => (
              <div
                key={consultant.id}
                className={`xl:w-img-width xl:h-72 w-img-width flex justify-center ${
                  activeConsultant === consultant.id ? '' : 'hidden'
                }`}
              >
                <img
                  className="w-full h-full"
                  src={consultant.image}
                  alt="image"
                />
              </div>
            ))}

            {consultants.map((consultant) => (
              <div
                key={consultant.id}
                className={`mt-10 w-96 flex justify-between lg:px-0 ${
                  activeConsultant === consultant.id ? '' : 'hidden'
                }`}
              >
                <div className="w-img-width">
                  <div className="flex items-center">
                    <a className="flex items-center" href={`tel: ${consultant.phone}`}>
                      <img alt="phone" src={phone} className="w-4 h-4 mr-2" />
                      <p>
                        <span className="font-bold">Tel:</span> {consultant.phone}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a className="flex items-center" href={`mailto: ${consultant.email}`}>
                      <img alt="email" src={mailBox} className="w-4 h-4 mr-2" />
                      <p>
                        <span className="font-bold">Email:</span> {consultant.email}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};








export default OurExperts;
