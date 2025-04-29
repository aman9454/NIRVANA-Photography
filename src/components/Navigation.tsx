import { useState, useEffect } from 'react';
import { X, Instagram, Twitter, Linkedin, Mail, Image, Users, Info, BookOpen, Contact, AlignLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

interface NavLink {
  label: string;
  id?: string;
  path?: string;
  icon: React.ElementType;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@nirvanax.com', label: 'Email' },
  ];

  const navLinks: NavLink[] = [
    { label: 'Portfolio', id: 'portfolio', icon: Image },
    { label: 'Team', id: 'team', icon: Users },
    { label: 'About', id: 'about', icon: Info },
    { label: 'Journal', path: '/journal', icon: BookOpen },
    { label: 'Contact', id: 'contact', icon: Contact },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-true-black/90 backdrop-blur-sm' : ''}`}>
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-playfair text-white z-50">
            NIRVANA X
          </Link>
          <button 
            className="text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={34} /> : <AlignLeft size={34} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-true-black/95 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Left Panel - Social Links */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 h-full w-1/2 flex items-center justify-center z-40"
            >
              <div className="space-y-10">
              {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.path ? (
                        <Link
                          to={link.path}
                          className="nav-link text-2xl lg:text-3xl font-playfair flex items-center gap-4"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon size={24} className="text-ogilvy-red" />
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(link.id!)}
                          className="nav-link text-2xl lg:text-3xl font-playfair flex items-center gap-4"
                        >
                          <Icon size={24} className="text-ogilvy-red" />
                          {link.label}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Panel - Navigation Links */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-1/2 flex items-center justify-center z-40"
            >
              <div className="space-y-10">
              {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link flex items-center gap-4 group"
                      whileHover={{ x: 10 }}
                      aria-label={link.label}
                    >
                      <Icon size={34} className="text-ogilvy-red" />
                    </motion.a>
                  );
                })}
               
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;