import React, { useEffect, useState } from 'react';
import { useCountUp, useIntersectionObserver } from '../../hooks';
import Text from './Text';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  label,
  className = '',
  delay = 0
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const { count, startAnimation } = useCountUp({
    end,
    duration,
    decimals,
    suffix,
    prefix
  });

  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const timer = setTimeout(() => {
        startAnimation();
        setHasAnimated(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isIntersecting, hasAnimated, startAnimation, delay]);

  return (
    <div 
      ref={targetRef as React.RefObject<HTMLDivElement>} 
      className={`relative text-center group ${className}`}
    >
      <div className={`relative transform transition-all duration-700 ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* 메인 카운터 */}
        <div className="relative mb-4">
          <h3 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-2 text-white">
            {count}
          </h3>
        </div>
        
        {/* 라벨 */}
        <div className="relative">
          <p className="text-xl sm:text-2xl text-gray-300 font-semibold tracking-wide">
            {label}
          </p>
          
          {/* 언더라인 효과 */}
          <div className="mt-3 mx-auto w-24 h-1 bg-white rounded-full opacity-70"></div>
        </div>
        
        {/* 사이드 데코레이션 */}
        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-white rounded-full opacity-0 group-hover:opacity-40 transition duration-300"></div>
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-white rounded-full opacity-0 group-hover:opacity-40 transition duration-300"></div>
      </div>
    </div>
  );
};

export default AnimatedCounter; 