
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              スマート教室予約
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary font-medium transition-colors">
              特徴
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary font-medium transition-colors">
              利用方法
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary font-medium transition-colors">
              料金プラン
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-colors">
              お客様の声
            </a>
            <a href="#contact" className="cta-button">
              資料請求
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              特徴
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              利用方法
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              料金プラン
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              お客様の声
            </a>
            <a 
              href="#contact" 
              className="text-center py-2 bg-primary text-white font-medium rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              資料請求
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
