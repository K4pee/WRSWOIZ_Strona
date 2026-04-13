'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const targetDate = new Date('2026-05-13T09:00:00+02:00').getTime();
  const rawDistance = now === null ? 0 : targetDate - now;
  const distance = Number.isFinite(rawDistance) && rawDistance > 0 ? rawDistance : 0;

  const times = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };

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
          <div className="countdown-actions">
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
