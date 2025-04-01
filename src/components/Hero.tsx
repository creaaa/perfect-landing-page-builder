
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              シンプルな<span className="text-primary">教室予約管理</span>で
              <br />学びの場を最適化
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              スマート教室予約は、教育機関向けの使いやすい予約システム。
              時間と空間を効率的に活用し、より良い学習環境を実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cta-button flex items-center justify-center gap-2">
                <span>資料請求する</span>
                <ArrowRight size={20} />
              </a>
              <a href="#how-it-works" className="bg-white text-primary border border-primary px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary/5 transition-all duration-300 flex items-center justify-center min-h-[44px]">
                詳しく見る
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200" 
                alt="教室予約システムの使用イメージ" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
