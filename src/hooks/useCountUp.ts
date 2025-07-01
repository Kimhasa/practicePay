import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export const useCountUp = ({
  start = 0,
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = ''
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startAnimation = () => {
    if (isAnimating || hasCompleted) return;
    
    setIsAnimating(true);
    startTimeRef.current = null;
    
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutCubic 이징 함수
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = start + (end - start) * easedProgress;
      setCount(currentCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setHasCompleted(true);
        setCount(end);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setCount(start);
    setIsAnimating(false);
    setHasCompleted(false);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const formatCount = (value: number): string => {
    const formatted = value.toFixed(decimals);
    return `${prefix}${formatted}${suffix}`;
  };

  return {
    count: formatCount(count),
    startAnimation,
    reset,
    isAnimating,
    hasCompleted
  };
}; 