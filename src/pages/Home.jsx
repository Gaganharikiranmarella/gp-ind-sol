import NewsSlider from '../components/NewsSlider';
import AchievementsSection from '../components/AchievementsSection';

const Home = () => (
  <>
    <main>
      <h1>Welcome to GP India Solutions</h1>
      <p>Where Innovation Meets Enterprise...</p>

      {/* News Section */}
      <NewsSlider />

      {/* Our Latest Achievements */}
      <AchievementsSection />
    </main>
  </>
);

export default Home;
