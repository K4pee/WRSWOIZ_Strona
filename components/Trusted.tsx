import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

function getJpgLogos() {
  const logosDir = path.join(process.cwd(), 'public', 'images', 'Logotypy');

  return fs
    .readdirSync(logosDir)
    .filter((fileName) => /\.(jpe?g)$/i.test(fileName))
    .sort((a, b) => a.localeCompare(b, 'pl'));
}

function buildLogoSrc(fileName: string) {
  return `/images/Logotypy/${encodeURIComponent(fileName)}`;
}

function buildLogoAlt(fileName: string) {
  return path.parse(fileName).name.replace(/[_-]+/g, ' ');
}

export default function Trusted() {
  const logos = getJpgLogos();

  return (
    <section className="trusted-section" id="zaufali">
      <div className="container">
        <div className="trusted-grid">
          {logos.map((logoFile) => (
            <div className="trusted-card" key={logoFile}>
              <Image
                src={buildLogoSrc(logoFile)}
                alt={buildLogoAlt(logoFile)}
                width={220}
                height={90}
                className="trusted-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
