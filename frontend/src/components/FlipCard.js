import React from 'react';
import { FaFolder, FaGraduationCap } from 'react-icons/fa';

const FlipCard = () => {
  return (
   <div className="flipcard ">
    <div className="title">
     <h3>OFFERED ACADEMIC PROGRAMS
</h3>
    </div>
   
    <div className="flip-card-container">
     
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front of the card */}
          <div className="flip-card-front">
           <FaFolder size={40} />

            <h2>ADMISSIONS OPEN: 2025-26</h2>
            <p>
              Apply now for the academic year 2025-26. We offer various programs to help you gain an in-depth understanding of Islamic Studies and Arabic language. Enroll now for a promising future in your academic journey.
            </p>
            
          </div>

          {/* Back of the card */}
          <div className="flip-card-back">
            <h3>Offered Courses</h3>
            <ul>
              <li>Alim / Alimah Program</li>
              <li>Dawrah / Fazeelah Program</li>
              <li>Diploma in Islamic Studies</li>
              <li>Diploma in Arabic Intensive</li>
            </ul>
            
            <p className="btn">ENROLL NOW</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlipCard;
