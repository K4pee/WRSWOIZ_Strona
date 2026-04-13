'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" 
            className="wave-path"
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>WRS WOIZ</h3>
            <p>Wydziałowa Rada Samorządu Wydziału Organizacji i Zarządzania</p>
            <div className="social-links">
              <a href="https://www.facebook.com/wrsoiz/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/oiz.pl/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@oiz.pl" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.linkedin.com/showcase/wrs-wydziału-organizacji-i-zarządzania-pł/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Nawigacja</h4>
            <ul>
              <li><a href="/">Strona główna</a></li>
              <li><a href="/o-nas">O nas</a></li>
              <li><a href="/dolacz">Dołącz</a></li>
              <li><a href="/zaufali-nam">Zaufali nam</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Wydarzenia</h4>
            <ul>
              <li><a href="/dw">Dzień Wydziału</a></li>
              <li><a href="/szpilka">Szpilka</a></li>
              <li><a href="/sniadanie-na-wydziale">Śniadanie na Wydziale</a></li>
              <li><a href="/kapuczino-z-alpaczino">Kapuczino z Alpaczino</a></li>
              <li><a href="/zaufali-nam">Zaufali nam</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <p>
              <i className="fas fa-envelope"></i> wrs.woiz@samorzad.p.lodz.pl
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> B9 (Lodex), pokój 333
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 WRS WOIZ - Wydziałowa Rada Samorządu Wydziału Organizacji i Zarządzania. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
