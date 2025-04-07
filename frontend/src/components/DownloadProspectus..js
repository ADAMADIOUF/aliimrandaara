import React from 'react';


const programs = [
  {
    id: 'Website-00002',
    title: 'Alim/Alimah Program',
    regFee: '$150',
    semFee: '$669',
    bgColor: '#e3fcef',
    link: 'https://www.darululoomonline.org/alim-alimah'
  },
  {
    id: 'Website-002',
    title: 'Diploma In Islamic Studies',
    regFee: '$150',
    semFee: '$569',
    bgColor: '#fef7e3',
    link: 'https://www.darululoomonline.org/diploma-islamic-studies'
  },
  {
    id: 'Website-02',
    title: 'Dawrah-Fazeelah Program',
    regFee: '$150',
    semFee: '$669',
    bgColor: '#e8ecff',
    link: 'https://www.darululoomonline.org/dawrah-fazeelah'
  },
  {
    id: 'Website-0002',
    title: 'Diploma In Arabic Intensive',
    regFee: '$150',
    semFee: '$569',
    bgColor: '#fde9f3',
    link: 'https://www.darululoomonline.org/arabic-intensive'
  }
];

const DownloadProspectus = () => {
  return (
    <div className="prospectus-container section-center">
      <div className="title"><h3 className="prospectus-title">DOWNLOAD PROSPECTUS</h3></div>
      <div className="prospectus-grid">
        {programs.map((program) => (
          <div
            key={program.id}
            className="prospectus-card"
            style={{ backgroundColor: program.bgColor }}
          >
            <h2 className="program-title">{program.title}</h2>
            <p className="program-id">{program.id}</p>
            <div className="fee-info">
              <p><strong>Registration Fee:</strong> {program.regFee}</p>
              <p><strong>Semester Fee:</strong> {program.semFee}</p>
            </div>
            <a href={program.link} target="_blank" rel="noopener noreferrer" className="prospectus-btn">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadProspectus;