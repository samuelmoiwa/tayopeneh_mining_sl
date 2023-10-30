import React from 'react'
import checked from '../../image/checked.png'

const Mining = () => {
  return (
    <div className='w-full bg-orange-500 flex justify-center py-8'>
        <div className='w-10/12 flex sm:flex-row flex-col justify-between items-center gap-3'>

            <div className='w-96 text-white sm:mt-0 mt-3'>
                <h1 className='text-4xl font-bold'>
                    Surface Mining
                </h1>
                <div className='w-16 h-1 bg-white mt-2'></div>
                <p className='text-sm mt-2'>
                    At Tayopeneh Mining, we are dedicated to delivering comprehensive surface mining expertise and
                    services to the mining industry. Our specialized services are designed to maximize efficiency,
                    safety, and sustainability in surface mining operations. Here are the key services we offer:
                    <br/> <br/>
                    <span className='font-bold'>
                        <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Overburden Removal
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Drilling and Blasting
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Environmental Mitigation
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Excavation and Hauling
                    </span>
                </p>
            </div>

            <div className='w-96 text-white sm:mt-0 mt-3'>
                <h1 className='text-4xl font-bold'>
                    Deep Mining
                </h1>
                <div className='w-16 h-1 bg-white mt-2'></div>
                <p className='text-sm mt-2'>
                    We proud to offer a comprehensive suite of deep mining services that enable
                    efficient and responsible resource extraction from beneath the earth's surface. Our expertise in
                    deep mining operations is underpinned by cutting-edge technology and a commitment to safety.
                    <br/> <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Shaft Sinking and Development
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Underground Drilling and Blasting
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Stope Design and Development
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Ground Support and Rock Mechanics
                    </span>
                </p>
            </div>

            <div className='w-96 text-white sm:mt-0 mt-3'>
                <h1 className='text-4xl font-bold'>
                    Placer Mining
                </h1>
                <div className='w-16 h-1 bg-white mt-2'></div>
                <p className='text-sm mt-2'>
                    Our placer mining services, a technique used to extract valuable
                    minerals and resources from surface deposits, such as riverbeds, beaches, and alluvial areas.
                    Our expertise in placer mining encompasses various services to maximize resource recovery.
                    <br/> <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Site Evaluation and Exploration
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Prospecting and Sampling
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Dredging and Sluicing
                    </span>
                    <br/>
                    <span className='font-bold'>
                    <img src={checked} className='inline-block w-3 h-3 mr-2' alt='checked' />
                        Wash Plant Operations
                    </span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Mining
