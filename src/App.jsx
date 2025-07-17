import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/Navbar'
import LandingPage from './components/LandingPage'
// import OurOfferings, { WhatWeDo } from './components/WhatWeDo'
import { OurServices } from './components/OurServices'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CareerSuiteIntro from './components/CareerSuiteIntro'
import FloatingBookDemoButton from './components/FloatingBookDemoButton'
import WhatYouCanAchieve from './components/WhatYouCanAchieve'
import MentorMatchSection from './components/MentorMatchSection'
import GrowthCommunitySection from './components/GrowthCommunitySection'
import CalendarSchedulingSection from './components/CalendarSchedulingSection'

// import Footer from './components/Footer'
// import { ContactUs } from './components/ContactUs'
// import { Navbar1 } from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FloatingBookDemoButton />
      <Navbar1 />
      <LandingPage />
      <CareerSuiteIntro />
      <GrowthCommunitySection />
      <CalendarSchedulingSection />
      <WhatYouCanAchieve />
      <MentorMatchSection />
      
      {/* <WhatWeDo /> */}
      {/* <OurOfferings/> */}
      {/* <OurServices /> */}
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
