'use client';

export default function Speakers() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid about-grid--single">
          <div className="about-content">
            <span className="section-badge">Kim jesteśmy</span>
            <h2>Wydziałowa Rada Samorządu</h2>
            <p>Jesteśmy organizacją studencką, która od lat działa na rzecz społeczności akademickiej Wydziału Organizacji i Zarządzania.</p>
            <ul className="about-list">
              <li><i className="fas fa-check-circle"></i> Organizujemy wydarzenia integracyjne</li>
              <li><i className="fas fa-check-circle"></i> Reprezentujemy głos studentów</li>
              <li><i className="fas fa-check-circle"></i> Wspieramy inicjatywy studenckie</li>
              <li><i className="fas fa-check-circle"></i> Budujemy społeczność wydziału</li>
            </ul>
            <a href="/o-nas" className="btn-outline">
              Poznaj nas bliżej <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
