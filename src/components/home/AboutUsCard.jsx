import React from 'react';
import { Link } from 'react-router-dom';

import diamond from '../../image/diamond.jpg'
import prof_service from '../../image/prof_service.jpg'
import feture_project from '../../image/feture_projects.jpg'


const DynamicCard = ({ id,top_title, imageSrc, title, details, ButtonLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
        <div className="font-bold text-xl mb-2 ml-3">{top_title}</div>
        <div className='bg-orange-500 w-16 h-2 mb-4'></div>
      <img src={imageSrc} alt={title} className="w-full h-64" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{details}</p>
        <Link to={ButtonLink} className="block text-center bg-orange-500 text-white p-2 mt-4 rounded hover:bg-orange-600 transition duration-300 ease-in-out">
          Read More
        </Link>
      </div>
    </div>
  );
};

const AboutUsCard = () => {

  const profService = '/profService'
  const naturalResources = '/naturalResources'
  const featuredProjects = '/featuredProjects'

  const cardData = [
    {
      id: '1',
      top_title: 'PROFESSIONAL SERVICE',
      imageSrc: prof_service,
      title: 'Reliable Mining Services',
      details: `We provide professional, multidisciplinary service to support all aspects of mine development,
        exploration, and feasibility`,
      ButtonLink: profService
    },
    {
      id: '2',
      top_title: 'NATURAL RESOURCES',
      imageSrc: diamond,
      title: 'Delivering Required Resources',
      details: `Mining industry provides a wide range of natural resources including metals, coal, gold,
        gemstones, limestones, chalk etc.`,
      ButtonLink: naturalResources
    },
    {
      id: '3',
      top_title: 'FEATURED PROJECTS',
      imageSrc: feture_project,
      title: 'Making an Impact on Mining ',
      details: `The project that we work on help mankind develop and thrive. Feel free to take a look at our
        latest projects`,
      ButtonLink: featuredProjects
    },
  ];

  return (
    <div className='flex items-center justify-center w-screen '>
      <div className="grid sm:grid-cols-3 gap-4 p-4 w-9/12">
        {cardData.map((card) => (
          <DynamicCard
            key={card.id}
            id={card.id}
            top_title={card.top_title}
            imageSrc={card.imageSrc}
            title={card.title}
            details={card.details}
            ButtonLink={card.ButtonLink}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUsCard;
