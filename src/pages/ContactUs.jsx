import React from 'react'
import ContactUsForm from '../components/ContactUs'
import Banner from '../components/contactUs/Banner'
import ContactDetails from '../components/contactUs/ContactDetails'

const ContactUs = () => {
  return (
    <div>
        <Banner />
        <ContactDetails />
        <ContactUsForm />
    </div>
  )
}

export default ContactUs
