'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-particles"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content-fancy">
        <span className="hero-badge">Wydziałowa Rada Samorządu</span>
        <h1 className="hero-title">
          <span className="title-line">Witaj w</span>
          <span className="title-highlight">WRS WOIZ</span>
        </h1>
        <p className="hero-subtitle">Tworzymy społeczność, organizujemy wydarzenia, działamy dla studentów</p>
        <div className="hero-buttons">
          <a href="/dolacz" className="btn-primary">
            <i className="fas fa-user-plus"></i> Dołącz do nas
          </a>
          <a href="#wydarzenia" className="btn-secondary">
            <i className="fas fa-calendar"></i> Zobacz wydarzenia
          </a>
        </div>
      </div>
      <a href="#odliczanie-dw" className="scroll-indicator">
        <span>Przewiń w dół</span>
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}
