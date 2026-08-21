import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {getEventPageContent, type EventPageContent} from '@/lib/site-content';
import {getEditionImages} from '@/lib/site-content-server';
import Link from 'next/link';

type Props = {
    slug: EventPageContent['slug'];
};

export default function EventPage({slug}: Props) {
    const content = getEventPageContent(slug);
    const sections = content.sections.map((section) => {
        if (!section.previousEditions?.length) return section;

        const previousEditions = section.previousEditions.map((ed) => {
            const fromFolder = getEditionImages(slug, ed.year);
            return {
                ...ed,
                images: fromFolder.length > 0 ? fromFolder : (ed.images ?? []),
            };
        });

        return {
            ...section,
            previousEditions,
        };
    });

    return (
        <>
            <Navbar/>
            <header
                className="page-header"
                style={content.backgroundImage ? {
                    padding: 0,
                    background: 'none'
                } : {}}
            >
                {content.backgroundImage ? (
                    <img
                        src={content.backgroundImage}
                        alt={content.pageTitle}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        }}
                    />
                ) : (
                    <h1>{content.pageTitle}</h1>
                )}
            </header>
            <main className="page-content">
                <div className="container">
                    <p>{content.intro}</p>

                    {sections.map((section) => (
                        <section key={section.heading}>
                            <h2>{section.heading}</h2>
                            {section.paragraphs?.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}

                            {section.sectionImages?.length ? (
                                <div
                                    className="section-images"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '20px',
                                        margin: '20px 0'
                                    }}
                                >
                                    {section.sectionImages.map((imgUrl, index) => (
                                        <img
                                            key={index}
                                            src={imgUrl}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                maxWidth: '600px',
                                                height: '450px',
                                                objectFit: 'cover',
                                                borderRadius: '8px'
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : null}

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
                                                style={{animationDelay: `${i * 80}ms`}}
                                            >
                                                <div
                                                    className="edition-thumb"
                                                    style={{backgroundImage: `url(${ed.images?.[0] ?? '/logo-wrs.png'})`}}
                                                />
                                                <div className="edition-content">
                                                    <h3>{ed.title ?? `Edycja ${ed.year}`}</h3>
                                                    {ed.excerpt ? <p className="muted">{ed.excerpt}</p> : null}
                                                    {ed.images?.length ?
                                                        <p className="muted">Zdjęć: {ed.images.length}</p> : null}
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
            <Footer/>
        </>
    );
}