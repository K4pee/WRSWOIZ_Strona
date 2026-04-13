import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Trusted from '@/components/Trusted';

export default function ZaufaliPage() {
  return (
    <>
      <Navbar />
      <header className="page-header">
        <div className="container">
          <h1>Zaufali nam</h1>
        </div>
      </header>

      <main className="page-content">
        <div className="container">
          <p>Partnerzy i organizacje, które współpracowały z nami przy wydarzeniach.</p>
        </div>
        <Trusted />
      </main>
      <Footer />
    </>
  );
}
