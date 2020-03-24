import { useState, useRef, useLayoutEffect, useCallback, useEffect, RefObject } from 'react';

interface Duration {
  show: number;
  hide: number;
}

interface Options {
  initialShow?: boolean;
  duration?: number | Duration;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
}

function useFader<T = HTMLElement>({
  initialShow = true,
  duration = { show: 0.3, hide: 0.3 },
  onEnter = () => undefined,
  onEntered = () => undefined,
  onExit = () => undefined,
  onExited = () => undefined,
}: Options = {}): [RefObject<T>, boolean, (show: boolean) => void] {
  duration = typeof duration === 'number' ? { show: duration, hide: duration } : duration;
  const [show, setShow] = useState<boolean>(initialShow);
  const ref = useRef<T & HTMLElement>(null);
  const timer = useRef(0);
  const handleTransitionEnd = useCallback(() => {
    if (ref.current!.style.opacity === '1') {
      onEntered();
    } else {
      ref.current!.style.display = 'none';
      onExited();
    }
  }, []);
  useLayoutEffect(() => {
    ref.current!.style.display = show ? 'block' : 'none';
    ref.current!.style.opacity = show ? '1' : '0';
    ref.current!.addEventListener('transitionend', handleTransitionEnd);
    ref.current!.addEventListener('webkitTransitionEnd', handleTransitionEnd);
    return () => {
      ref.current!.removeEventListener('transitionend', handleTransitionEnd);
      ref.current!.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    };
  }, []);
  useEffect(() => {
    clearTimeout(timer.current);
    if (show && ref.current!.style.opacity === '0') {
      onEnter();
      ref.current!.style.display = 'block';
      ref.current!.style.transition = `opacity ${(duration as Duration).show}s linear`;
      timer.current = setTimeout(() => (ref.current!.style.opacity = '1'), 0);
    }
    if (!show && ref.current!.style.opacity === '1') {
      onExit();
      ref.current!.style.transition = `opacity ${(duration as Duration).hide}s linear`;
      ref.current!.style.opacity = '0';
    }
  }, [show]);
  return [ref, show, setShow];
}

export default useFader;
