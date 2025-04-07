import React from 'react'
import Newsletter from '../components/Newsletter'
import Admission from '../components/Admission'
import OrientationProgram from '../components/OrientationPrograme'
import Video from '../components/Video'
import BackgroundLine from '../components/BackgroundLine'
import FlipCard from '../components/FlipCard'
import DownloadSection from '../components/DownloadSection'
import DownloadProspectus from '../components/DownloadProspectus.'
import HybridLearning from '../components/HybridLearning'
import VisionMission from '../components/VisionMission'
import Teachers from '../components/Teachers'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="home-page-one-container section-center">
       <Admission/>
       <Newsletter/>
      </div>
      <div className="home-page-one-container section-center">
       <OrientationProgram/>
        <Video 
        videoUrl="https://www.youtube.com/embed/XN5imE-wiuA?si=DhE2AVS0v_pE-j1X" 
        title="Welcome to Darul Uloom Online" 
        description="Watch this short introduction to learn more about our mission, programs, and how you can begin your journey of knowledge with us."
      />
      </div>
      <FlipCard/>
      <DownloadSection/>
      <DownloadProspectus/>
      <HybridLearning/>
      <BackgroundLine/>
      <VisionMission/>
      <Teachers/>
    </div>
  )
}

export default HomePage
