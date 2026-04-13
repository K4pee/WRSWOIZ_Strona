'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { newsEntries } from '@/lib/site-content';

export default function News() {
  const newsItems = newsEntries;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const maxIndex = useMemo(() => {
    return Math.max(0, newsItems.length - visibleCards);
  }, [newsItems.length, visibleCards]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setVisibleCards(1);
        return;
      }
      if (width <= 768) {
        setVisibleCards(2);
        return;
      }
      setVisibleCards(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const cards = track.querySelectorAll<HTMLElement>('.news-card');
    const targetCard = cards[currentIndex];
    const targetOffset = targetCard ? targetCard.offsetLeft : 0;
    track.style.transform = `translateX(-${targetOffset}px)`;
  }, [currentIndex, visibleCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="news-section" id="aktualnosci">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Aktualności</span>
          <h2>Najnowsze informacje</h2>
          <p>Najważniejsze aktualności i zapowiedzi w jednym miejscu.</p>
        </div>
        <div className="news-carousel" id="news-carousel">
          <div className="news-controls" aria-label="Sterowanie aktualnościami">
            <button type="button" className="news-arrow news-arrow-prev" aria-label="Poprzednie aktualności" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button type="button" className="news-arrow news-arrow-next" aria-label="Następne aktualności" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="news-viewport">
            <div className="news-track" ref={trackRef}>
              {newsItems.map((item, index) => (
                <article key={index} className="news-card">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <Link href={item.link} className="news-link">
                    {item.cta} <i className="fas fa-arrow-right"></i>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
