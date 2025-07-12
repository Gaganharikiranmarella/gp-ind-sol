import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './NewsSlider.css';

const NewsSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const rssUrl = 'https://news.google.com/rss/search?q=technology+OR+politics+OR+general+knowledge&hl=en-IN&gl=IN&ceid=IN:en';
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        const { data } = await axios.get(apiUrl);
        setArticles(data.items.slice(0, 10));
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <>
      <h2 className="news-title">📰 Trending News</h2>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.pubDate.slice(0, 16)}</p>
              <p>{article.description.replace(/<[^>]+>/g, '').slice(0, 150)}...</p>
            </a>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default NewsSlider;
