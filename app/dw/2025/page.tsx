import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function DW2025() {
  const images = getEditionImages('dw', '2025') || ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Dzień Wydziału 2025</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria z Dnia Wydziału 2025.</p>

          <section>
            <h2>Galeria</h2>
            <div style={{ marginTop: 8 }}>
              
              <Gallery images={images} altPrefix="DW 2025" shuffle={true} />
            </div>
          </section>

          <p style={{ marginTop: '1rem' }}>
            <Link href="/dw">← Powrót do strony Dzień Wydziału</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

