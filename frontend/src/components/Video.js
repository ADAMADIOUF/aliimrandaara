import React from 'react';
const Video = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-heading">🎥 Welcome to Darul Uloom Online</h2>
        <p className="video-description">
          Watch this short introduction to learn more about our mission, programs, and how you can begin your journey of knowledge with us.
        </p>

        <div className="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XN5imE-wiuA?si=DhE2AVS0v_pE-j1X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
