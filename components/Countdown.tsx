'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [times, setTimes] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date('2026-05-13T09:00:00').getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimes({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimes({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="countdown-section" id="odliczanie-dw">
      <div className="container">
        <div className="countdown-card">
          <span className="section-badge">Dzień Wydziału 2026</span>
          <h2>Odliczamy do startu</h2>
          <p className="countdown-subtitle">Widzimy się 13 maja 2026</p>
          <div className="countdown-grid" aria-label="Odliczanie do Dnia Wydziału 2026">
            <div className="countdown-item">
              <span className="countdown-value" id="countdown-days">{pad(times.days)}</span>
              <span className="countdown-label">Dni</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" id="countdown-hours">{pad(times.hours)}</span>
              <span className="countdown-label">Godzin</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" id="countdown-minutes">{pad(times.minutes)}</span>
              <span className="countdown-label">Minut</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" id="countdown-seconds">{pad(times.seconds)}</span>
              <span className="countdown-label">Sekund</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <a href="https://forms.office.com/e/VRGzkGcnEL" className="countdown-register-btn" aria-label="Link do zapisów na Dzień Wydziału 2026">
              <i className="fas fa-ticket-alt"></i> Zapisy na Dzień Wydziału 2026
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe97gjKYlsfMMN1yGvMUXcKA9AHMLQxmMSV77t-pvauUA5C-A/viewform" className="countdown-register-btn" aria-label="Link do zapisów na Spartakiadę">
              <i className="fas fa-running"></i> Zapisy na Spartakiadę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
