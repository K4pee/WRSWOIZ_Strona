import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getEditionImages } from '@/lib/site-content-server';
import Gallery from '@/components/Gallery';

export default function Sniadanie2023() {
  const images = getEditionImages('sniadanie-na-wydziale', '2023') || ['/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png', '/logo-wrs.png'];

  return (
    <>
      <Navbar />
      <header className="page-header">
        <h1>Śniadanie na Wydziale 2023</h1>
      </header>
      <main className="page-content">
        <div className="container">
          <p>Galeria ze Śniadania na Wydziale 2023.</p>

          <section>
            <h2>Galeria</h2>
            <div style={{ marginTop: 8 }}>
              
              <Gallery images={images} altPrefix="Śniadanie 2023" shuffle={true} />
            </div>
          </section>

          <p style={{ marginTop: '1rem' }}>
            <Link href="/sniadanie-na-wydziale">← Powrót do strony Śniadanie na Wydziale</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
