import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../atoms';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  className = ''
}) => {
  return (
    <footer className={`bg-black border-t border-gray-800 text-white ${className}`}>
      {/* 메인 푸터 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 & 회사 소개 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">P</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                PRACTICE PAY
              </h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              차세대 결제 플랫폼으로 게임처럼 간단하고 군사급 보안으로 안전한 
              결제 경험을 제공합니다.
            </p>
            
            {/* 소셜 미디어 */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-gray-700">
                <span className="font-bold text-sm">T</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-gray-700">
                <span className="font-bold text-sm">L</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-gray-700">
                <span className="font-bold text-sm">G</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-gray-700">
                <span className="font-bold text-sm">D</span>
              </button>
            </div>
          </div>
          
          {/* 제품 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">제품</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  결제 API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  개발자 도구
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  보안 솔루션
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  분석 대시보드
                </a>
              </li>
            </ul>
          </div>
          
          {/* 회사 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">회사</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  뉴스
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  연락처
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 하단 카피라이트 */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Practice Pay. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 