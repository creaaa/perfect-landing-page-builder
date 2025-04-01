
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "導入までにどのくらいの時間がかかりますか？",
    answer: "標準的なプランであれば、お申し込みから約1週間でご利用いただけるようになります。カスタマイズが必要な場合は、要件によって期間が変動する可能性があります。詳細は個別にご相談ください。"
  },
  {
    question: "既存のシステムとの連携は可能ですか？",
    answer: "はい、可能です。APIを通じて、学校管理システムや学生情報システムなど、既存のシステムと連携できるよう設計されています。連携方法については、導入前のヒアリングで詳細をお伺いします。"
  },
  {
    question: "データ移行の対応はしていますか？",
    answer: "はい、既存の予約データがある場合は、CSV形式などでの一括インポートに対応しています。データ構造によっては変換作業が必要になる場合がありますので、事前にご相談ください。"
  },
  {
    question: "操作方法を教えてくれるトレーニングはありますか？",
    answer: "初期導入時に基本的な操作方法の説明セッションを行っています。また、詳細なマニュアルや操作ガイドビデオもご用意しています。追加のトレーニングが必要な場合は、オプションとして承ります。"
  },
  {
    question: "モバイルアプリはありますか？",
    answer: "専用のモバイルアプリはまだ提供していませんが、スマートフォンやタブレットのブラウザからも快適に操作できるレスポンシブデザインを採用しています。主要な機能はモバイル端末からもすべて利用可能です。"
  },
  {
    question: "データのバックアップはどうなっていますか？",
    answer: "システム上のデータは毎日自動でバックアップされます。バックアップデータは暗号化され、セキュアな環境で保管されます。万が一の際のデータ復旧についても万全の体制を整えています。"
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">よくある</span>ご質問
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            スマート教室予約に関するよくあるご質問と回答をまとめました。
            その他のご質問は、お問い合わせフォームからお気軽にご連絡ください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
