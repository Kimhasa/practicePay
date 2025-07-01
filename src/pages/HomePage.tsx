import React from 'react';
import { MainLayout } from '../components/templates';
import { Text, Button, AnimatedCounter } from '../components/atoms';
import { Card } from '../components/molecules';

const HomePage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('검색어:', query);
  };

  const handleCardClick = (title: string) => {
    console.log(`${title} 카드 클릭됨`);
  };

  return (
    <MainLayout onSearch={handleSearch}>
      <div className="min-h-screen bg-black">
        {/* 히어로 섹션 */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* 간단한 배경 패턴 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* 메인 타이틀 */}
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white">
                PRACTICE
                <br />
                PAY
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                  차세대 결제 플랫폼의 혁신
                </h2>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              게임처럼 간단하고, 보안은 최고 수준으로.<br />
              <span className="text-white font-semibold">
                미래의 결제 경험을 지금 만나보세요.
              </span>
            </p>

            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <button className="px-8 py-4 bg-white text-black text-xl font-bold rounded-xl hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                <span className="mr-3">🚀</span>
                지금 시작하기
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-xl font-bold rounded-xl hover:bg-white hover:text-black transition duration-300 flex items-center justify-center">
                <span className="mr-3">⚡</span>
                데모 체험
              </button>
            </div>

            {/* 스크롤 인디케이터 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* 기능 섹션 */}
        <div className="relative py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6">
                GAME CHANGING
                <br />
                FEATURES
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                게임 업계 최고 수준의 기술력으로 만든 혁신적인 결제 솔루션
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 카드 1 - 속도 */}
              <div className="group relative">
                <div className="p-8 bg-black border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
                  <div className="text-6xl mb-6">⚡</div>
                  <h3 className="text-2xl font-bold mb-4">초고속 처리</h3>
                  <p className="text-gray-400 group-hover:text-gray-600 mb-6 leading-relaxed">
                    0.1초 만에 완료되는 번개같은 결제 속도로 게이머들의 몰입을 방해하지 않습니다.
                  </p>
                  <button className="font-semibold transition-colors flex items-center">
                    자세히 보기 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 카드 2 - 보안 */}
              <div className="group relative">
                <div className="p-8 bg-black border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
                  <div className="text-6xl mb-6">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4">군사급 보안</h3>
                  <p className="text-gray-400 group-hover:text-gray-600 mb-6 leading-relaxed">
                    최첨단 암호화 기술과 다중 보안 시스템으로 사용자의 자산을 철통같이 보호합니다.
                  </p>
                  <button className="font-semibold transition-colors flex items-center">
                    자세히 보기 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 카드 3 - API */}
              <div className="group relative">
                <div className="p-8 bg-black border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
                  <div className="text-6xl mb-6">🔌</div>
                  <h3 className="text-2xl font-bold mb-4">원클릭 연동</h3>
                  <p className="text-gray-400 group-hover:text-gray-600 mb-6 leading-relaxed">
                    단 한 줄의 코드로 모든 게임과 앱에 완벽하게 통합되는 개발자 친화적 API.
                  </p>
                  <button className="font-semibold transition-colors flex items-center">
                    자세히 보기 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 성과 섹션 */}
        <div className="relative py-24 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6">
                LEGENDARY
                <br />
                ACHIEVEMENTS
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                전 세계 개발자들과 게이머들이 선택한 결제 플랫폼
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <AnimatedCounter
                end={1}
                suffix="M+"
                label="월간 거래건수"
                duration={2500}
                delay={200}
                className="transform hover:scale-105 transition-transform duration-300"
              />
              
              <AnimatedCounter
                end={99.9}
                suffix="%"
                label="시스템 가용성"
                duration={2500}
                decimals={1}
                delay={400}
                className="transform hover:scale-105 transition-transform duration-300"
              />
              
              <AnimatedCounter
                end={500}
                suffix="+"
                label="파트너사"
                duration={2500}
                delay={600}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* 추가 정보 */}
            <div className="mt-16 text-center">
              <div className="inline-block p-6 bg-gray-900 border border-white rounded-2xl">
                <p className="text-white text-lg font-semibold">
                  🏆 2024년 최고의 핀테크 이노베이션 어워드 수상
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="relative py-24 bg-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-white mb-8">
              LEVEL UP
              <br />
              YOUR PAYMENT
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              지금 바로 차세대 결제 경험을 시작하세요
            </p>
            
            <button className="px-12 py-6 bg-white text-black text-2xl font-bold rounded-2xl hover:bg-gray-200 transition duration-300">
              🎮 지금 시작하기
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage; 