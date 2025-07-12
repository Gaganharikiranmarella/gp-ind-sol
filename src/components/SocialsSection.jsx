import React from 'react';
import './SocialsSection.css';

const SocialsSection = () => {
  return (
    <section className="socials-section">
      {/* Person 1 */}
      <div className="person">
        <h3>Marella Gagan Hari Kiran</h3>
        <ul>
          <li><a href="https://github.com/Gaganharikiranmarella" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/gagan-hari-kiran-462856287" target="_blank">LinkedIn</a></li>
          <li><a href="ghk7125@gmail.com">Email</a></li>
        </ul>
      </div>

      {/* Blue animated divider */}
      <div className="divider"></div>

      {/* Person 2 */}
      <div className="person">
        <h3>Prayaga Sri Ram Pranav</h3>
        <ul>
          <li><a href="https://github.com/Ram200509" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/pranav-prayaga-1891a5322" target="_blank">LinkedIn</a></li>
          <li><a href="prayagapranav.sarath@gmail.com">Email</a></li>
        </ul>
      </div>
    </section>
  );
};

export default SocialsSection;
