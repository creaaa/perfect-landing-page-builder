
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "導入前は教室予約で混乱が生じていましたが、このシステムのおかげで管理が劇的に改善しました。シンプルな操作性と直感的なインターフェースが気に入っています。",
    author: "山田 健太",
    position: "東京都・私立高校 教頭",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    quote: "スマート教室予約を導入してから、空き教室の有効活用が進み、学生の自主学習スペースとしても活用度が上がりました。管理者としての負担も大幅に減りました。",
    author: "鈴木 美香",
    position: "大阪府・大学 施設管理課",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    quote: "複数の校舎を持つ学習塾を経営していますが、このシステムで一元管理ができるようになり、効率が格段に上がりました。スタッフからの評判も上々です。",
    author: "佐藤 勇太",
    position: "学習塾経営者",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">お客様</span>の声
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            スマート教室予約を導入いただいたお客様から、多くの喜びの声をいただいています。
            実際のユーザー体験をぜひご参考ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card relative pt-12 animate-fade-in"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="absolute top-0 left-6 transform -translate-y-1/2 bg-primary rounded-full p-2">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.imageUrl} 
                  alt={`${testimonial.author}の写真`} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
