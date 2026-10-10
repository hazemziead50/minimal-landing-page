import { useState } from 'react';
import Icon from '../assets/Icon.svg';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-white shadow-sm w-full sticky top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
        {/* الشعار */}
        <div className="flex items-center gap-2">
          <img src={Icon} alt="Nexcent Logo" className="w-8 h-8" />
          <span className="font-bold text-2xl text-secondary">Nexcent</span>
        </div>

        {/* روابط التنقل */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-neutral-d_grey font-medium hover:text-primary transition-colors">Home</a>
          <a href="#features" className="text-neutral-d_grey hover:text-primary transition-colors">Features</a>
          <a href="#community" className="text-neutral-d_grey hover:text-primary transition-colors">Community</a>
          <a href="#blog" className="text-neutral-d_grey hover:text-primary transition-colors">Blog</a>
          <a href="#pricing" className="text-neutral-d_grey hover:text-primary transition-colors">Pricing</a>
        </nav>

        {/* زر التسجيل */}
        <div className="hidden md:block">
          <Button  children ={'Register Now'}className="px-6 py-2" hasArrow={true} />
        </div>

        {/* زر التبديل للشاشات الصغيرة */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center p-2 text-neutral-d_grey focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة */}
      {isOpen && (
        <div className="md:hidden w-full bg-neutral-white border-t border-neutral-silver px-6 py-4 shadow-md transition-all duration-300">
          <nav className="flex flex-col items-center  gap-3">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-neutral-d_grey font-medium py-2 px-3 rounded hover:text-primary hover:bg-neutral-silver transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-neutral-d_grey py-2 px-3 rounded hover:text-primary hover:bg-neutral-silver transition-colors"
            >
              Features
            </a>
            <a
              href="#community"
              onClick={() => setIsOpen(false)}
              className="text-neutral-d_grey py-2 px-3 rounded hover:text-primary hover:bg-neutral-silver transition-colors"
            >
              Community
            </a>
            <a
              href="#blog"
              onClick={() => setIsOpen(false)}
              className="text-neutral-d_grey py-2 px-3 rounded hover:text-primary hover:bg-neutral-silver transition-colors"
            >
              Blog
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-neutral-d_grey py-2 px-3 rounded hover:text-primary hover:bg-neutral-silver transition-colors"
            >
              Pricing
            </a>

            <div className="w-full flex justify-center pt-2 ">
              <Button
                className="w-auto px-8 py-2.5 text-sm whitespace-nowrap"
                hasArrow={true}
                onClick={() => setIsOpen(false)}
                children={'Register Now'}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;