import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseIntersectionObserverOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const targetRef = useRef<any>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const cleanup = useCallback(() => {
    if (observerRef.current && targetRef.current) {
      observerRef.current.unobserve(targetRef.current);
    }
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    // 이미 트리거되었고 triggerOnce가 true인 경우 observer를 설정하지 않음
    if (triggerOnce && hasTriggered) return;

    // 기존 observer가 있다면 정리
    cleanup();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        
        if (isCurrentlyIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            // triggerOnce가 true인 경우 즉시 observer 정리
            setTimeout(() => cleanup(), 100);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isCurrentlyIntersecting);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observerRef.current.observe(target);

    return cleanup;
  }, [threshold, rootMargin, triggerOnce, hasTriggered, cleanup]);

  // 컴포넌트 unmount 시 정리
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return { targetRef, isIntersecting };
}; 