import React, { useState, useEffect } from 'react';
import WebHeader from './web/web-header';
import MobileHeader from './mobile/mobile-header';

const navItems = [
  { text: 'Home', link: '#home' },
  { text: 'About', link: '#about' },
  { text: 'Skills', link: '#skills' },
  { text: 'Education', link: '#education' },
  { text: 'Projects', link: '#project' },
  { text: 'Experience', link: '#experience' },
  { text: 'Contact', link: '#contact' },
];

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarCSS, setNavbarCSS] = useState('');
  const [navbarItemCSS, setNavbarItemCSS] = useState('text-black');
  const [isOpen, setIsOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 7) {
      setNavbar(true);
      setNavbarCSS('bg-black');
      setNavbarItemCSS('text-white');
    } else {
      setNavbar(false);
      setNavbarCSS('');
      setNavbarItemCSS('text-black');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div>
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <WebHeader navbarCSS={navbarCSS} navbarItemCSS={navbarItemCSS} navItems={navItems} />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <MobileHeader navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}