import React from 'react';
import { MainLayout } from '../components/templates';
import { Text } from '../components/atoms';
import { ContactForm } from '../components/organisms';

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-black">
        {/* 히어로 섹션 */}
        <div className="relative py-24 overflow-hidden bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-white">
              CONTACT
              <br />
              US
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              혁신적인 결제 솔루션에 대해 더 알고 싶으신가요?<br />
              <span className="text-white font-semibold">
                언제든지 연락주세요!
              </span>
            </p>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* 연락처 정보 */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-black text-white mb-8">
                    GET IN TOUCH
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    우리는 항상 새로운 파트너십과 혁신적인 아이디어를 환영합니다. 
                    Practice Pay와 함께 결제의 미래를 만들어가고 싶으시다면 언제든지 연락주세요.
                  </p>
                </div>

                {/* 연락처 카드들 */}
                <div className="space-y-6">
                  {/* 이메일 */}
                  <div className="p-6 bg-black border border-white rounded-xl flex items-center space-x-4 hover:bg-white hover:text-black transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-black">
                      <svg className="w-6 h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-black">이메일</h3>
                      <p className="text-gray-400 group-hover:text-gray-600 font-semibold">contact@practicepay.com</p>
                    </div>
                  </div>

                  {/* 전화번호 */}
                  <div className="p-6 bg-black border border-white rounded-xl flex items-center space-x-4 hover:bg-white hover:text-black transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-black">
                      <svg className="w-6 h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-black">전화번호</h3>
                      <p className="text-gray-400 group-hover:text-gray-600 font-semibold">+82-2-1234-5678</p>
                    </div>
                  </div>

                  {/* 주소 */}
                  <div className="p-6 bg-black border border-white rounded-xl flex items-center space-x-4 hover:bg-white hover:text-black transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-black">
                      <svg className="w-6 h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-black">오피스</h3>
                      <p className="text-gray-400 group-hover:text-gray-600 font-semibold">서울특별시 강남구 테헤란로 427</p>
                    </div>
                  </div>

                  {/* 소셜 미디어 */}
                  <div className="p-6 bg-black border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 group">
                    <h3 className="text-lg font-bold text-white group-hover:text-black mb-4">소셜 미디어</h3>
                    <div className="flex space-x-4">
                      <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors group-hover:bg-gray-900 group-hover:hover:bg-gray-800">
                        <span className="text-black font-bold text-sm group-hover:text-white">T</span>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors group-hover:bg-gray-900 group-hover:hover:bg-gray-800">
                        <span className="text-black font-bold text-sm group-hover:text-white">L</span>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors group-hover:bg-gray-900 group-hover:hover:bg-gray-800">
                        <span className="text-black font-bold text-sm group-hover:text-white">G</span>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors group-hover:bg-gray-900 group-hover:hover:bg-gray-800">
                        <span className="text-black font-bold text-sm group-hover:text-white">D</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 문의 폼 */}
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ 섹션 */}
        <div className="py-24 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                FAQ
              </h2>
              <p className="text-xl text-gray-400">
                자주 묻는 질문들
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl hover:bg-white hover:text-black transition-colors group">
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-3">
                  Practice Pay는 어떤 결제 방식을 지원하나요?
                </h3>
                <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed">
                  신용카드, 은행 계좌, 암호화폐, 모바일 결제 등 다양한 결제 방식을 지원합니다. 
                  또한 새로운 결제 방식도 지속적으로 추가하고 있습니다.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl hover:bg-white hover:text-black transition-colors group">
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-3">
                  보안은 어떻게 보장되나요?
                </h3>
                <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed">
                  PCI DSS Level 1 인증, 군사급 암호화, 다중 인증 시스템 등 
                  최고 수준의 보안 시스템을 운영하고 있습니다.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl hover:bg-white hover:text-black transition-colors group">
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-3">
                  개발자 API는 어떻게 사용하나요?
                </h3>
                <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed">
                  RESTful API와 GraphQL을 모두 지원하며, 상세한 문서와 SDK를 제공합니다. 
                  몇 줄의 코드로 쉽게 연동할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="py-24 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
              READY TO
              <br />
              GET STARTED?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              지금 바로 Practice Pay와 함께 시작하세요
            </p>
            
            <button className="px-12 py-6 bg-white text-black text-2xl font-bold rounded-xl hover:bg-gray-200 transition duration-300">
              🚀 무료 체험 시작하기
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage; 