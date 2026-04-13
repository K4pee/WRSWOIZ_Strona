'use client';

export default function Schedule() {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item stat-item--wide">
            <div className="stat-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div>
              <div className="stat-number">Wiele wydarzeń</div>
              <div className="stat-label"></div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-number stat-number--count">500</div>
            <div className="stat-label">Uczestników</div>
          </div>

          <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="stat-number stat-number--count">40</div>
              <div className="stat-label">Członków zespołu</div>
            </div>
        </div>
      </div>
    </section>
  );
}
