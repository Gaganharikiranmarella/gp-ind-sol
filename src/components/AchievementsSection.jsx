import React from "react";
import "./AchievementsSection.css";
import trophyImage from "../assets/achievement.jpg"; // You can change the image file

const AchievementsSection = () => {
  return (
    <section className="achievements-section">
      <div className="achievement-text">
        <h2>🏆 Our Latest Achievements</h2>
        <p>
          The work starts now. With the advent of GP India Solutions, we have
          sworn to utilise our innovative mindset as well as skills learnt in
          order to apply them in real life
        </p>
      </div>
      <div className="achievement-image">
        <img src={trophyImage} alt="Achievement" />
      </div>
    </section>
  );
};

export default AchievementsSection;
