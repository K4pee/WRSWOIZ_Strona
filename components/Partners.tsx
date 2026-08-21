'use client';

import {eventEntries, getLatestEditionLink} from '@/lib/site-content';

export default function Partners() {
    return (
        <section className="events-section" id="wydarzenia">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Co organizujemy</span>
                    <h2>Nasze wydarzenia</h2>
                    <p>Odkryj, co przygotowaliśmy dla Ciebie</p>
                </div>

                <div className="events-fancy-grid">
                    {eventEntries.map((event) => {
                        const slug = event.link.replace(/^\//, '');
                        const latest = getLatestEditionLink(slug as any);
                        return (
                            <div key={event.title} className={`event-fancy-card ${event.featured ? 'featured' : ''}`}>
                                {event.badge ? <span className="event-badge">{event.badge}</span> : null}
                                <div className="event-icon">
                                    <i className={event.iconClass}></i>
                                </div>
                                <div className="event-content">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <a href={slug} className="event-link">
                                        {event.cta} <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                                <div className="event-bg-icon">
                                    <i className={event.iconClass}></i>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
