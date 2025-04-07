import React from 'react';

const VisionMission = () => {
  return (
    <div className="visionmission-wrapper section-center">
      <div className="visionmission-grid">
      
        <div className="visionmission-box">
         <img
              src="https://www.darululoomonline.org/wp-content/uploads/2024/05/mission19.jpg" // Replace with actual image path
              alt="Vision"
              className="visionmission-image-with-border"
            />
          <h2>Vision</h2>
          <p>
            Our vision is to become a global beacon of Islamic learning, offering
            accessible online education grounded in the teachings of Ahl Al Sunnah
            Wal Jama’ah. We strive to cultivate a worldwide community dedicated to
            faith, practice, and excellence, applying the rich heritage of Islamic
            scholarship to contemporary challenges with integrity and insight. Our
            goal is to foster the correct understanding of Islam and to make a
            profound societal impact by advocating for peace, justice, and harmony.
          </p>
          <button className="visionmission-button">Read More</button>
          <div className="visionmission-image-container">
            <hr className="visionmission-border-line" />
            
          </div>
        </div>

        {/* Mission Section */}
        <div className="visionmission-box">
          <h2>Mission</h2>
          <p>
            To impart Islamic education via online mode according to the values and
            the thoughts of Ahl Al Sunnah Wal Jama’ah (The Sunni school), to enable
            seekers of knowledge across the world to establish faith (Iman), practice
            (Islam), and excellence (Ihsan) in their own lives and to transfer the
            legacy of Islamic scholarship to the Muslim Ummah and protect them from
            all types of deviation by educating them in various areas of Islamic
            studies, including Quranic studies, Hadith, Islamic history, jurisprudence,
            and Arabic language.
          </p>
          <button className="visionmission-button">Read More</button>
          <div className="visionmission-image-container">
            <img
              src="https://www.darululoomonline.org/wp-content/uploads/2024/05/muslim-man-reading-holy-quran-islamic-concept-1024x683.jpg" // Replace with actual image path
              alt="Mission"
              className="visionmission-image-with-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
