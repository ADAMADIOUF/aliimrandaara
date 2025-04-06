import React, { useState } from 'react';


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
    // Integrate with your backend/email service here
  };

  return (
    <section className="newsletter-section">
      <h2 className="newsletter-title">GET LIVE UPDATES OF DARUL ULOOM ONLINE</h2>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
