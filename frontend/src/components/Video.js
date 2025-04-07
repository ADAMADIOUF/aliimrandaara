import React from 'react';

const Video = ({ videoUrl, title, description }) => {
  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-heading">🎥 {title}</h2>
        <p className="video-description">{description}</p>

        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
