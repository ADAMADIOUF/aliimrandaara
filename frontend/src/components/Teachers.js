import React from 'react';


const teachers = [
  {
    name: 'Dr. Mufti Yasir Nadeem',
    image: 'https://www.darululoomonline.org/wp-content/uploads/elementor/thumbs/Ml-Yasir-Pic-qo7jvznk4i89h5zppekryr4qgenv4h4b6isxxj25dk.webp',
    alt: 'Ml-Yasir-Pic',
  },
  {
    name: 'Moulana Mohammad Abdul Quayyum Zeeshan',
    image: 'https://www.darululoomonline.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2019-06-15-at-12.30.20-PM-qo7jxk1vikdgtrpsk2ye4cwe3ixvybc7e9y2q4qj08.webp',
    alt: 'Quayyum Zeeshan',
  },
  {
    name: 'Moulana Zubair Ahmad',
    image: 'https://www.darululoomonline.org/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-29-at-8.57.32-PM.jpeg',
    alt: 'Zubair Ahmad',
  },
  {
    name: 'Moulana Mehmood Asghar',
    image: 'https://www.darululoomonline.org/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-31-at-7.11.23-AM.jpeg',
    alt: 'Mehmood Asghar',
  },
  {
    name: 'Maulana Syed Aqeel Iqbal',
    image: 'https://www.darululoomonline.org/wp-content/uploads/2024/05/B612_20210319_124316_031.jpeg',
    alt: 'Aqeel Iqbal',
  },
  {
    name: 'Moulana Abdullah Jalal',
    image: 'https://www.darululoomonline.org/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-29-at-7.48.56-AM.jpeg',
    alt: 'Abdullah Jalal',
  }
];

const Teachers = () => {
  return (
    <section className="teachers-section section-center">
      <h2 className="teachers-title">DIGNIFIED & DEDICATED TEACHERS</h2>
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <img
              src={teacher.image}
              alt={teacher.alt}
              className="teacher-image"
            />
            <h3 className="teacher-name">{teacher.name}</h3>
            <button className="teacher-button">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;