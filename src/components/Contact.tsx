
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    privacy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = '組織名を入力してください';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = 'プライバシーポリシーに同意してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Here you would normally submit the form to your backend
      console.log('Form submitted:', formData);
      
      // Show success toast
      toast({
        title: "送信完了",
        description: "資料請求を受け付けました。担当者より連絡いたします。",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
        privacy: false
      });
    } else {
      // Show error toast
      toast({
        title: "エラー",
        description: "入力内容に誤りがあります。確認してください。",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%] md:w-[80%]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary">資料請求</span>・お問い合わせ
            </h2>
            <p className="text-lg text-gray-700">
              スマート教室予約について詳しく知りたい方は、以下のフォームからお気軽にお問い合わせください。
              デモのご依頼も歓迎です。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="form-label">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="山田 太郎"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="example@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="organization" className="form-label">
                  組織名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`form-input ${errors.organization ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="○○学校 / ○○大学"
                  aria-describedby={errors.organization ? "organization-error" : undefined}
                />
                {errors.organization && (
                  <p id="organization-error" className="mt-1 text-sm text-red-500">
                    {errors.organization}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="form-label">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="03-xxxx-xxxx"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="form-label">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input min-h-[120px]"
                placeholder="ご質問やご要望があればお書きください"
                rows={4}
              />
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
                  className={`w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/50 ${errors.privacy ? 'border-red-500' : ''}`}
                  aria-describedby={errors.privacy ? "privacy-error" : undefined}
                />
                <label htmlFor="privacy" className="ml-2 text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  <a href="#" className="text-primary hover:underline">プライバシーポリシー</a>に同意します
                </label>
              </div>
              {errors.privacy && (
                <p id="privacy-error" className="mt-1 text-sm text-red-500 ml-7">
                  {errors.privacy}
                </p>
              )}
            </div>
            
            <button
              type="submit"
              className="cta-button w-full"
            >
              資料を請求する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
