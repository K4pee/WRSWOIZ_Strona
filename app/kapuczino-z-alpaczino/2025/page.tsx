import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function Kapuczino2025() {
  const images = getEditionImages('kapuczino-z-alpaczino', '2025') || ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Kapuczino z Alpaczino 2025</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria z wydarzenia Kapuczino z Alpaczino 2025.</p>

          <section>
            <h2>Galeria</h2>
            <div style={{ marginTop: 8 }}>
              
              <Gallery images={images} altPrefix="Kapuczino 2025" shuffle={true} />
            </div>
          </section>

          <p style={{ marginTop: '1rem' }}>
            <Link href="/kapuczino-z-alpaczino">← Powrót do strony Kapuczino z Alpaczino</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

