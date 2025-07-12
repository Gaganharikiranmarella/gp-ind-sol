import NewsSlider from '../components/NewsSlider';
import AchievementsSection from '../components/AchievementsSection';
import SocialsSection from '../components/SocialsSection';

const Home = () => (
  <>
    <main>
      <h1>Welcome to GP India Solutions</h1>
      <p>Where Innovation Meets Enterprise...</p>

      {/* News Section */}
      <NewsSlider />

      {/* Our Latest Achievements */}
      <AchievementsSection />

      {/* Social Links Section */}
      <SocialsSection />
    </main>
  </>
);

export default Home;
