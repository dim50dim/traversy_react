import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '..//components/JobListings'
const HomePage = () => {
  return (
    <div>
      <Hero/>
         <HomeCards/>
         <JobListings/>
    </div>
  )
}

export default HomePage
