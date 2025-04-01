
import React from 'react';
import { Calendar, Clock, Users, Smartphone, Shield, BarChart } from 'lucide-react';

const featuresList = [
  {
    icon: <Calendar className="w-10 h-10 text-primary" />,
    title: "リアルタイム空室確認",
    description: "いつでもどこからでも、空き教室の状況をリアルタイムで確認できます。急な予定変更にも柔軟に対応可能です。"
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "ワンクリック予約",
    description: "複雑な手続きは不要。シンプルな操作で、必要な時に必要な教室を素早く予約できます。"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "グループ管理機能",
    description: "チームやクラス単位での予約管理が可能。権限設定により、適切なアクセス制御を実現します。"
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "モバイル対応",
    description: "スマートフォンやタブレットからも快適に操作できるレスポンシブデザイン。外出先からでも予約可能です。"
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "安全なデータ管理",
    description: "予約データは暗号化して保存。個人情報や利用履歴などの大切な情報を確実に保護します。"
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "利用統計レポート",
    description: "教室の稼働率や利用傾向を可視化。データに基づいた効率的な施設運用をサポートします。"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            シンプルで<span className="text-primary">強力な</span>機能
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            スマート教室予約は、教育機関の日常業務をスムーズにする多彩な機能を備えています。
            直感的な操作で、管理者もユーザーも快適に利用できます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:border-primary/20 hover:border animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
