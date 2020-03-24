import { useState, useRef, useLayoutEffect, useMemo, useCallback, useEffect, RefObject } from 'react';

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

function useFader<T = HTMLElement>(options: Options = {}): [RefObject<T>, boolean, (show: boolean) => void] {
  // Initialize option values
  const initialShow = useMemo(() => options.initialShow ?? true, []);
  const duration = useMemo(() => {
    return typeof options.duration === 'number'
      ? { show: options.duration, hide: options.duration }
      : options.duration ?? { show: 0.3, hide: 0.3 };
  }, []);
  const onEnter = useMemo(() => options.onEnter ?? (() => undefined), []);
  const onEntered = useMemo(() => options.onEntered ?? (() => undefined), []);
  const onExit = useMemo(() => options.onExit ?? (() => undefined), []);
  const onExited = useMemo(() => options.onExited ?? (() => undefined), []);
  // Create state and ref for fadeIn/Out.
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
  // Set basic styles and events for fadeIn/Out.
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
  // Processing fadeIn/Out when the show state change.
  useEffect(() => {
    clearTimeout(timer.current);
    if (show) {
      onEnter();
      ref.current!.style.display = 'block';
      ref.current!.style.transition = `opacity ${duration.show}s linear`;
      timer.current = setTimeout(() => (ref.current!.style.opacity = '1'), 0);
    } else {
      onExit();
      ref.current!.style.transition = `opacity ${duration.hide}s linear`;
      ref.current!.style.opacity = '0';
    }
  }, [show]);
  return [ref, show, setShow];
}

export default useFader;
