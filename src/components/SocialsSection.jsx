import React from 'react';
import './SocialsSection.css';

const SocialsSection = () => {
  return (
    <section className="socials-section">
      {/* Person 1 */}
      <div className="person">
        <h3>Gagan Hari Kiran</h3>
        <ul>
          <li><a href="https://github.com/your-github" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/your-linkedin" target="_blank">LinkedIn</a></li>
          <li><a href="mailto:your@email.com">Email</a></li>
        </ul>
      </div>

      {/* Blue animated divider */}
      <div className="divider"></div>

      {/* Person 2 */}
      <div className="person">
        <h3>John Doe</h3>
        <ul>
          <li><a href="https://github.com/johndoe" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a></li>
          <li><a href="mailto:johndoe@email.com">Email</a></li>
        </ul>
      </div>
    </section>
  );
};

export default SocialsSection;
