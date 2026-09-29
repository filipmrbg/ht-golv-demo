import { useEffect, useRef, useState, ReactNode } from 'react';

type Animation =
  | 'fade'
  | 'glide-in'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'blur-in'
  | 'scale-in'
  | 'clip-in'
  | 'reveal-mask'
  | 'nybe-reveal'
  | 'slide-up-fade'
  | 'scale-x-left'
  | 'scale-x-center';

interface Props {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  duration?: number;
  easing?: string;
}

interface HiddenStyle {
  opacity: number;
  transform: string;
  filter: string;
  clipPath: string;
  transformOrigin?: string;
}

function getHidden(animation: Animation): HiddenStyle {
  const yOffset = '20px';
  const xOffset = '20px';

  switch (animation) {
    case 'fade':
      return { opacity: 0, transform: 'none', filter: 'none', clipPath: 'none' };
    case 'glide-in':
      return { opacity: 0, transform: 'translate3d(0, 10px, 0)', filter: 'none', clipPath: 'none' };
    case 'fade-up':
      return { opacity: 0, transform: `translate3d(0, ${yOffset}, 0)`, filter: 'none', clipPath: 'none' };
    case 'fade-down':
      return { opacity: 0, transform: `translate3d(0, -${yOffset}, 0)`, filter: 'none', clipPath: 'none' };
    case 'fade-left':
      return { opacity: 0, transform: `translate3d(-${xOffset}, 0, 0)`, filter: 'none', clipPath: 'none' };
    case 'fade-right':
      return { opacity: 0, transform: `translate3d(${xOffset}, 0, 0)`, filter: 'none', clipPath: 'none' };
    case 'blur-in':
      return { opacity: 0, transform: 'translate3d(0, 12px, 0)', filter: 'blur(8px)', clipPath: 'none' };
    case 'scale-in':
      return { opacity: 0, transform: 'scale3d(0.97, 0.97, 1)', filter: 'none', clipPath: 'none' };
    case 'clip-in':
      return { opacity: 1, transform: 'none', filter: 'none', clipPath: 'inset(0 0 100% 0)' };
    case 'reveal-mask':
      return { opacity: 1, transform: 'none', filter: 'none', clipPath: 'inset(0 100% 0 0)' };
    case 'nybe-reveal':
      return { 
        opacity: 0, 
        transform: 'translate3d(0, 20px, 0) scale(0.92)', 
        filter: 'none', 
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' 
      };
    case 'slide-up-fade':
      return { opacity: 0, transform: 'translate3d(0, 30px, 0)', filter: 'none', clipPath: 'none' };
    case 'scale-x-left':
      return { opacity: 1, transform: 'scaleX(0) translate3d(0, 0, 0)', filter: 'none', clipPath: 'none', transformOrigin: 'left' };
    case 'scale-x-center':
      return { opacity: 1, transform: 'scaleX(0) translate3d(0, 0, 0)', filter: 'none', clipPath: 'none', transformOrigin: 'center' };
    default:
      return { opacity: 0, transform: `translate3d(0, ${yOffset}, 0)`, filter: 'none', clipPath: 'none' };
  }
}

export default function ScrollReveal({
  children,
  animation = 'glide-in',
  delay = 0,
  threshold = 0.01,
  duration,
  easing,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px 0px 50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const effectiveDuration = duration !== undefined ? duration : (animation === 'nybe-reveal' ? 1.1 : 0.8);
  const easingStyle = easing || (animation === 'nybe-reveal' ? 'cubic-bezier(0.645, 0.045, 0.355, 1)' : 'cubic-bezier(0.22, 1, 0.36, 1)');
  const isClipAnimation = animation === 'clip-in' || animation === 'reveal-mask' || animation === 'nybe-reveal';

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setAnimationDone(true);
      }, effectiveDuration * 1000 + delay + 50);
      return () => clearTimeout(timer);
    }
  }, [visible, effectiveDuration, delay]);

  const hidden = getHidden(animation);

  const outerTransitionProps = ['opacity', 'transform'];
  if (animation === 'blur-in') {
    outerTransitionProps.push('filter');
  }
  const outerTransitionStyle = outerTransitionProps
    .map((prop) => `${prop} ${effectiveDuration}s ${easingStyle}`)
    .join(', ');

  const getVisibleTransform = (anim: Animation) => {
    if (anim === 'scale-x-left' || anim === 'scale-x-center') {
      return 'scaleX(1) translate3d(0, 0, 0)';
    }
    if (anim === 'scale-in') {
      return 'scale3d(1, 1, 1) translate3d(0, 0, 0)';
    }
    return 'translate3d(0, 0, 0)';
  };

  const getVisibleClipPath = (anim: Animation) => {
    if (anim === 'nybe-reveal') {
      return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    }
    return 'inset(0 0 0 0)';
  };

  const renderContent = () => {
    if (isClipAnimation) {
      return (
        <div
          style={{
            clipPath: animationDone ? 'none' : (visible ? getVisibleClipPath(animation) : hidden.clipPath),
            WebkitClipPath: animationDone ? 'none' : (visible ? getVisibleClipPath(animation) : hidden.clipPath),
            transition: `clip-path ${effectiveDuration}s ${easingStyle}, -webkit-clip-path ${effectiveDuration}s ${easingStyle}`,
            transitionDelay: `${delay}ms`,
          }}
        >
          {children}
        </div>
      );
    }
    return children;
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : (animation === 'nybe-reveal' ? 0 : (isClipAnimation ? 1 : hidden.opacity)),
        transform: animationDone ? 'none' : (visible ? getVisibleTransform(animation) : hidden.transform),
        filter: animationDone ? 'none' : (visible ? 'none' : hidden.filter),
        transformOrigin: hidden.transformOrigin,
        transition: outerTransitionStyle,
        transitionDelay: `${delay}ms`,
        willChange: animationDone ? undefined : 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {renderContent()}
    </div>
  );
}
