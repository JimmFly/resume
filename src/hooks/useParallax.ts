import { useEffect, useState, useCallback } from 'react';

/**
 * 视差滚动效果 Hook
 * @param speed 视差速度，0-1之间，数值越小移动越慢
 * @param offset 初始偏移量
 */
export const useParallax = (speed: number = 0.5, offset: number = 0) => {
  const [scrollY, setScrollY] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(offset);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setParallaxOffset(offset + currentScrollY * speed);
  }, [speed, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    scrollY,
    parallaxOffset,
    transform: `translateY(${parallaxOffset}px)`,
    style: {
      transform: `translateY(${parallaxOffset}px)`,
      willChange: 'transform'
    }
  };
};

/**
 * 滚动进度 Hook
 * 返回当前页面滚动的百分比进度
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初始化
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * 元素可见性检测 Hook
 * @param threshold 可见性阈值，0-1之间
 */
export const useInView = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView] as const;
};

/**
 * 多层视差效果 Hook
 * 用于创建多个不同速度的视差层
 */
export const useMultiLayerParallax = (layers: { speed: number; offset?: number }[]) => {
  const [scrollY, setScrollY] = useState(0);
  const [layerOffsets, setLayerOffsets] = useState<number[]>(
    layers.map(layer => layer.offset || 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const newOffsets = layers.map((layer) => {
        const baseOffset = layer.offset || 0;
        return baseOffset + currentScrollY * layer.speed;
      });
      
      setLayerOffsets(newOffsets);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [layers]);

  return {
    scrollY,
    layerOffsets,
    getLayerStyle: (index: number) => ({
      transform: `translateY(${layerOffsets[index] || 0}px)`,
      willChange: 'transform'
    })
  };
};