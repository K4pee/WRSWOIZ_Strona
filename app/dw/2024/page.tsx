import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function DW2024() {
  const images = getEditionImages('dw', '2024') || ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>DzieĹ„ WydziaĹ‚u 2024</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria z Dnia WydziaĹ‚u 2024.</p>

          <section>
            <h2>Galeria</h2>
            <div className="gallery-top">
              
              <Gallery images={images} altPrefix="DW 2024" minTile={280} shuffle={true} />
            </div>
          </section>

          <p className="back-link-wrap">
            <Link href="/dw">â† PowrĂłt do strony DzieĹ„ WydziaĹ‚u</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}


