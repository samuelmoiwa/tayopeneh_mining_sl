import React from 'react'
import logo from '../../asset/logo.png'

const ContactDetails = () => {
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
         <img class="w-full rounded" src={logo} alt="image" />

         <div className="py-1 flex flex-col mb-1">
           <p
           className="text-xl font-bold leading-none sm:text-2xl
           text-gray-500 my-6'"
           >
             Contact Details
           </p>
         </div>

           <p class="text-gray-600 mb-8 text-justify">
            Address: example address | Phone: +232 72 331 439 | whatsapp: +224 611 87 95 91  | Email: info@tayopeneh.com

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
             Tayopeneh <br/> Contact Us
           </p>
           <div className="w-16 h-1 bg-orange-500 mt-2" data-aos="fade-right">
           </div>
         </div>

         <div className="py-2 flex flex-col mb-2">
           <p
           className="text-2xl font-bold leading-none sm:text-3xl
           text-gray-500 my-6'"
           >
             Contact Tayopeneh Mining
           </p>
         </div>

           <p class="text-gray-600 mb-8 text-justify">
            Thank you for your interest in Tayopeneh Mining. We welcome your inquiries, feedback, and collaboration
            opportunities. If you have any questions or would like to get in touch with us, our dedicated team is
            here to assist you

         </p>
       </div>
     </div>
   </div>
 </section>
</>
  )
}

export default ContactDetails
