import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getEventPageContent, type EventPageContent } from '@/lib/site-content';
import Link from 'next/link';

type Props = {
  slug: EventPageContent['slug'];
};

export default function EventPage({ slug }: Props) {
  const content = getEventPageContent(slug);

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>{content.pageTitle}</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>{content.intro}</p>

          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.previousEditions?.length ? (
                <div className="editions-grid">
                      {section.previousEditions.map((ed, i) => (
                        <Link key={ed.year} href={ed.link} className="unstyled-link">
                          <article
                            className="edition-tile"
                            style={{ animationDelay: `${i * 80}ms` }}
                          >
                            <div
                              className="edition-thumb"
                              style={{ backgroundImage: `url(${ed.images?.[0] ?? '/logo-wrs.png'})` }}
                            />
                            <div className="edition-content">
                              <h3>{ed.title ?? `Edycja ${ed.year}`}</h3>
                              {ed.excerpt ? <p className="muted">{ed.excerpt}</p> : null}
                              <p className="cta">Zobacz galerię →</p>
                            </div>
                          </article>
                        </Link>
                      ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}