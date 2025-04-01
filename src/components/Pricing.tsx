
import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "スタータープラン",
    price: "15,000",
    description: "小規模な教室や塾に最適なプラン",
    features: [
      "最大10教室まで管理可能",
      "1ヶ月の予約スケジュール",
      "基本的な予約機能",
      "メールサポート"
    ],
    recommended: false,
    buttonText: "詳細を見る"
  },
  {
    name: "スタンダードプラン",
    price: "35,000",
    description: "中規模の学校や教育施設向け",
    features: [
      "最大30教室まで管理可能",
      "3ヶ月の予約スケジュール",
      "高度な予約管理機能",
      "グループ・権限設定",
      "統計レポート（基本）",
      "メール・チャットサポート"
    ],
    recommended: true,
    buttonText: "おすすめプラン"
  },
  {
    name: "プレミアムプラン",
    price: "65,000",
    description: "大規模教育機関向けの高機能プラン",
    features: [
      "無制限の教室管理",
      "12ヶ月の予約スケジュール",
      "高度な予約管理機能",
      "詳細な権限設定と監査ログ",
      "カスタマイズ可能な統計レポート",
      "API連携",
      "優先サポート（24時間対応）"
    ],
    recommended: false,
    buttonText: "詳細を見る"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            シンプルな<span className="text-primary">料金プラン</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            規模や用途に合わせて選べる、わかりやすい料金体系。
            初期費用なし、月額料金のみでご利用いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`card rounded-xl hover:translate-y-[-5px] transition-all animate-fade-in ${
                plan.recommended 
                  ? 'border-2 border-primary relative shadow-lg' 
                  : 'border border-gray-200'
              }`}
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
                  人気No.1
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">¥{plan.price}</span>
                <span className="text-gray-600">/月（税別）</span>
              </div>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                  plan.recommended 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-white text-primary border border-primary hover:bg-primary/5'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6 flex items-start gap-4 max-w-3xl mx-auto">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">カスタムプランも対応可能</h4>
            <p className="text-gray-700">
              上記のプランでご要望を満たせない場合は、お客様の環境に合わせたカスタムプランをご提案いたします。
              特別な機能や大規模な導入をご検討の方は、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
