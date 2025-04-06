import React from 'react'
import Newsletter from '../components/Newsletter'
import Admission from '../components/Admission'
import OrientationProgram from '../components/OrientationPrograme'
import Video from '../components/Video'
import BackgroundLine from '../components/BackgroundLine'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="home-page-one-container section-center">
       <Admission/>
       <Newsletter/>
      </div>
      <div className="home-page-one-container section-center">
       <OrientationProgram/>
       <Video/>
      </div>
      <BackgroundLine/>
    </div>
  )
}

export default HomePage
