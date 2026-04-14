import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function Szpilka2025() {
  const loadedImages = getEditionImages('szpilka', '2025');
  const images = loadedImages.length > 0 ? loadedImages : ['/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Szpilka 2025</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria z Szpilki 2025.</p>
          <section>
            <h2>Galeria</h2>
            <div className="gallery-top">
              
              <Gallery images={images} altPrefix="Szpilka 2025" shuffle={true} />
            </div>
          </section>

          <p className="back-link-wrap">
            <Link href="/szpilka">← Powrót do strony Szpilka</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}


