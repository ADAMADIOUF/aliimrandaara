import React from 'react';
import Video from './Video';


const HybridLearning = () => {
  return (
    <div className="hybrid-section section-center">
      <div className="hybrid-header">
        <h1>Hybrid Pattern of Synchronous & Asynchronous Learning</h1>
      </div>
      <div className="hybrid-background">
        <div className="hybrid-description">
          <p>
            <strong>Darul Uloom Online</strong> offers a hybrid mode of study, encompassing both <span className="highlight">synchronous</span> and <span className="highlight">asynchronous</span> learning. In the synchronous mode, students can attend live classes and interact with teachers in a virtual classroom. All live sessions are recorded, forming the basis of the asynchronous platform, which allows students to access these classes at any time and from any location, unrestricted by time zones or work commitments.
          </p>
          <p>
            Additionally, the asynchronous mode enables students to communicate with teachers via the <strong>Learning Management System (LMS)</strong> to resolve academic queries. This distinctive feature of <strong>Darul Uloom Online</strong> facilitates the dissemination of education globally, ensuring it reaches even the most remote areas.
          </p>
        </div>
      </div>

      <div className="hybrid-text-rows">
        <div className="text-row">
          <h2><span className="highlight">Welcome to</span>, Darul Uloom Online</h2>
          <p>
            <strong>Want to do Alim course</strong> right from your home but don’t know where to start?
          </p>
        </div>
        <div className="text-row">
          <p>
            <strong>Darul Uloom Online</strong>, an Islamic institute linked to our <span className="highlight">glorious past</span>, rooted in the <span className="highlight">present</span>, and focused on the <span className="highlight">future</span>, offers <strong>Alim / Alimah Programs</strong> that empower students to understand, love, and live by the Quran and the Sunnah, according to the understanding of the pious predecessors, in order to follow them into <span className="highlight">jannah</span>, guide those around us, and please <strong>Allah (SWT)</strong>.
          </p>
        </div>
      </div>

      <Video 
        videoUrl="https://www.youtube.com/embed/PdCAS0s6nW4?si=nIhPRDhtrHI-2ylg" 
        title="Welcome to Darul Uloom Online" 
        description="Watch this short introduction to learn more about our mission, programs, and how you can begin your journey of knowledge with us."
      />
    </div>
  );
};

export default HybridLearning;
