'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  onToggleDarkMode?: () => void;
  isDark?: boolean;
}

export default function Navbar({ onToggleDarkMode, isDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image src="/logo-wrs.png" alt="Logo WRS" className="logo-img" width={50} height={50} />
          <span className="logo-text">WRS WOIZ</span>
        </Link>

        <button className="nav-toggle" onClick={toggleMenu} aria-label="Przełącz nawigację">
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/o-nas" className="nav-link" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
              O nas
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/zaufali-nam" className="nav-link" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
              Zaufali nam
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/dolacz" className="nav-link" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
              Dołącz
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/dw" className="nav-link" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
              Dzień Wydziału
            </Link>
          </li>
          <li className={`nav-item dropdown ${dropdownOpen ? 'active' : ''}`}>
            <a 
              href="#" 
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Wydarzenia
            </a>
            <ul className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <li><Link href="/szpilka" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>Szpilka</Link></li>
              <li><Link href="/sniadanie-na-wydziale" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>Śniadanie na Wydziale</Link></li>
              <li><Link href="/kapuczino-z-alpaczino" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>Kapuczino z Alpaczino</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
