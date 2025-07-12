import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1  from './components/Navbar'
import LandingPage from './components/LandingPage'
import { WhatWeDo } from './components/WhatWeDo'
import { OurServices } from './components/OurServices'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CareerSuiteIntro from './components/CareerSuiteIntro'
import MeetOurTeam from './components/MeetOurTeam'
import FloatingBookDemoButton from './components/FloatingBookDemoButton'
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
      <WhatWeDo />
      <OurServices />
      <MeetOurTeam />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
