import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      alert('메시지가 성공적으로 전송되었습니다!');
    } catch (error) {
      alert('메시지 전송 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="p-8 bg-black border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300 group">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white group-hover:text-black mb-4">
            SEND MESSAGE
          </h2>
          <p className="text-gray-300 group-hover:text-gray-600">
            프로젝트에 대해 문의하거나 파트너십을 제안해주세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 필드 */}
          <div>
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-300 group-hover:text-gray-600 mb-2">
                이름 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange('name')}
                placeholder="성함을 입력해주세요"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-white focus:outline-none transition-colors group-hover:bg-gray-100 group-hover:text-black group-hover:placeholder-gray-500 group-hover:border-gray-400"
              />
            </div>
          </div>

          {/* 이메일 필드 */}
          <div>
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-300 group-hover:text-gray-600 mb-2">
                이메일 <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                placeholder="이메일 주소를 입력해주세요"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-white focus:outline-none transition-colors group-hover:bg-gray-100 group-hover:text-black group-hover:placeholder-gray-500 group-hover:border-gray-400"
              />
            </div>
          </div>

          {/* 제목 필드 */}
          <div>
            <div className="w-full">
              <label className="block text-sm font-semibold text-gray-300 group-hover:text-gray-600 mb-2">
                제목 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={handleChange('subject')}
                placeholder="문의 제목을 입력해주세요"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-white focus:outline-none transition-colors group-hover:bg-gray-100 group-hover:text-black group-hover:placeholder-gray-500 group-hover:border-gray-400"
              />
            </div>
          </div>

          {/* 메시지 필드 */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 group-hover:text-gray-600 mb-2">
              메시지 <span className="text-red-400">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="자세한 문의 내용을 입력해주세요..."
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-white focus:outline-none transition-colors resize-none group-hover:bg-gray-100 group-hover:text-black group-hover:placeholder-gray-500 group-hover:border-gray-400"
            />
          </div>

          {/* 제출 버튼 */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-white text-black text-lg font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group-hover:bg-black group-hover:text-white group-hover:hover:bg-gray-800"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  전송 중...
                </>
              ) : (
                <>
                  <span className="mr-3">🚀</span>
                  메시지 전송하기
                </>
              )}
            </button>
          </div>
        </form>

        {/* 추가 정보 */}
        <div className="mt-8 pt-6 border-t border-gray-700 group-hover:border-gray-300">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 group-hover:text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              24시간 내 응답
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              보안 연결
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              개인정보 보호
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 