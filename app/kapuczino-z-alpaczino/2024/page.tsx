import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export const dynamic = 'force-dynamic';

export default function Kapuczino2024() {
  const loadedImages = getEditionImages('kapuczino-z-alpaczino', '2024');
  const images = loadedImages.length > 0
    ? loadedImages
    : ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Kapuczino z Alpaczino 2024</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria z wydarzenia Kapuczino z Alpaczino 2024.</p>

          <section>
            <h2>Galeria</h2>
            <div className="gallery-top">
              
              <Gallery images={images} altPrefix="Kapuczino 2024" shuffle={true} />
            </div>
          </section>

          <p className="back-link-wrap">
            <Link href="/kapuczino-z-alpaczino">← Powrót do strony Kapuczino z Alpaczino</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}


