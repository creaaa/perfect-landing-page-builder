
import React from 'react';
import { Search, CheckCircle, CalendarCheck, Award } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-12 h-12 text-white" />,
    title: "空き教室を検索",
    description: "日時や施設タイプなど、条件に合った空き教室を簡単に検索できます。リアルタイムで空室状況が確認できるので、最新の情報に基づいて計画が立てられます。",
    color: "bg-blue-500"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-white" />,
    title: "予約を確定",
    description: "希望の教室が見つかったら、数クリックで予約を確定。複雑な手続きや承認プロセスを簡略化し、スムーズな予約体験を提供します。",
    color: "bg-green-500"
  },
  {
    icon: <CalendarCheck className="w-12 h-12 text-white" />,
    title: "予約管理",
    description: "マイページから予約の確認、変更、キャンセルが可能。予定の変更があっても柔軟に対応できるので、限られたリソースを最大限に活用できます。",
    color: "bg-purple-500"
  },
  {
    icon: <Award className="w-12 h-12 text-white" />,
    title: "利用と評価",
    description: "予約した教室を利用した後は、簡単なフィードバックを残すことができます。皆さまの声が、さらに使いやすいシステムへの改善につながります。",
    color: "bg-orange-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">簡単</span>4ステップで予約完了
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            スマート教室予約は、直感的な操作で誰でも簡単に利用できます。
            複雑な操作は必要ありません。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 animate-fade-in" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <div className={`${step.color} rounded-full p-4 flex-shrink-0`}>
                {step.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  ステップ {index + 1}: {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
