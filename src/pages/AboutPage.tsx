import React from 'react';
import { MainLayout } from '../components/templates';
import { Text, Button } from '../components/atoms';

const AboutPage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('검색어:', query);
  };

  return (
    <MainLayout onSearch={handleSearch}>
      <div className="min-h-screen bg-black">
        {/* 히어로 섹션 */}
        <div className="relative py-24 overflow-hidden bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-white">
              ABOUT
              <br />
              PRACTICE PAY
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              차세대 결제 플랫폼의 혁신을 이끄는 우리의 이야기
            </p>
          </div>
        </div>

        {/* 미션 섹션 */}
        <div className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                  OUR MISSION
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    우리는 결제가 더 이상 장벽이 되지 않는 세상을 만들고자 합니다. 
                    게임에서 영감을 받은 직관적인 UX와 최첨단 보안 기술을 결합하여, 
                    누구나 쉽고 안전하게 사용할 수 있는 결제 플랫폼을 제공합니다.
                  </p>
                  <p>
                    개발자들이 몇 줄의 코드로 완벽한 결제 시스템을 구축할 수 있도록 하고, 
                    사용자들이 번거로운 인증 과정 없이 원클릭으로 결제를 완료할 수 있는 
                    미래를 만들어가고 있습니다.
                  </p>
                </div>
              </div>
              
              {/* 미션 카드 */}
              <div className="relative">
                <div className="p-8 bg-black border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🎯</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-black mb-4">우리의 목표</h3>
                    <ul className="space-y-3 text-gray-300 group-hover:text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        전 세계 1억 사용자 확보
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        0.1초 미만 결제 처리 시간
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        99.99% 시스템 가용성
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                TECH STACK
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                최첨단 기술로 구축된 안전하고 빠른 결제 인프라
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 프론트엔드 */}
              <div className="p-6 bg-gray-900 border border-gray-600 rounded-2xl text-center hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-2">Frontend</h3>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">React, TypeScript, Next.js</p>
              </div>

              {/* 백엔드 */}
              <div className="p-6 bg-gray-900 border border-gray-600 rounded-2xl text-center hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-2">Backend</h3>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">Node.js, GraphQL, Redis</p>
              </div>

              {/* 블록체인 */}
              <div className="p-6 bg-gray-900 border border-gray-600 rounded-2xl text-center hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-2">Blockchain</h3>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">Ethereum, Polygon, IPFS</p>
              </div>

              {/* 인공지능 */}
              <div className="p-6 bg-gray-900 border border-gray-600 rounded-2xl text-center hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-bold text-white group-hover:text-black mb-2">AI/ML</h3>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">TensorFlow, PyTorch, GPT</p>
              </div>
            </div>
          </div>
        </div>

        {/* 팀 섹션 */}
        <div className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                OUR TEAM
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                혁신을 이끄는 전문가들
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 팀원 1 */}
              <div className="p-8 bg-black border border-white rounded-2xl text-center transform hover:scale-105 transition duration-300 hover:bg-white hover:text-black group">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-black text-2xl font-bold group-hover:bg-black group-hover:text-white">
                  CEO
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-black mb-2">김혁신</h3>
                <p className="text-gray-400 group-hover:text-gray-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">
                  전 카카오페이 CTO, 15년 핀테크 경험
                </p>
              </div>

              {/* 팀원 2 */}
              <div className="p-8 bg-black border border-white rounded-2xl text-center transform hover:scale-105 transition duration-300 hover:bg-white hover:text-black group">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-black text-2xl font-bold group-hover:bg-black group-hover:text-white">
                  CTO
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-black mb-2">박기술</h3>
                <p className="text-gray-400 group-hover:text-gray-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">
                  전 네이버 블록체인 리드, 10년 개발 경험
                </p>
              </div>

              {/* 팀원 3 */}
              <div className="p-8 bg-black border border-white rounded-2xl text-center transform hover:scale-105 transition duration-300 hover:bg-white hover:text-black group">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-black text-2xl font-bold group-hover:bg-black group-hover:text-white">
                  CDO
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-black mb-2">이디자인</h3>
                <p className="text-gray-400 group-hover:text-gray-600 mb-4">Chief Design Officer</p>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm">
                  전 삼성전자 UX 디렉터, 12년 디자인 경험
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="py-24 bg-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
              JOIN THE
              <br />
              REVOLUTION
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              우리와 함께 결제의 미래를 만들어가세요
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-white text-black text-xl font-bold rounded-xl hover:bg-gray-200 transition duration-300">
                🚀 개발자 지원하기
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-xl font-bold rounded-xl hover:bg-white hover:text-black transition duration-300">
                💼 팀에 합류하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage; 