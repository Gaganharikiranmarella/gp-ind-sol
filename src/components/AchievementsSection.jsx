import React from 'react';
import './AchievementsSection.css';
import trophyImage from '../assets/achievement.jpg'; // You can change the image file

const AchievementsSection = () => {
  return (
    <section className="achievements-section">
      <div className="achievement-text">
        <h2>🏆 Our Latest Achievements</h2>
        <p>
          GP India Solutions was recently recognized for its outstanding contribution to digital transformation and AI integration in the public sector. Our team successfully deployed a state-of-the-art automated system that reduced processing time by 60%, helping boost efficiency across multiple departments.
        </p>
      </div>
      <div className="achievement-image">
        <img src={trophyImage} alt="Achievement" />
      </div>
    </section>
  );
};

export default AchievementsSection;
