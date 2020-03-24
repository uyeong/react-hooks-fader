import React, { createElement } from 'react';
import useFader from './index';

export default {
  title: 'useFader',
};

export const Default = () =>
  createElement(() => {
    const [ref, show, setShow] = useFader<HTMLDivElement>({
      initialShow: true,
      enter: true,
      duration: {
        show: 1,
        hide: 1,
      },
      onEnter: () => console.log('Enter'),
      onEntered: () => console.log('Entered'),
      onExit: () => console.log('Exit'),
      onExited: () => console.log('Exited'),
    });
    function handle() {
      setShow(!show);
    }
    return (
      <div className="wrapper">
        <div ref={ref}>target</div>
        <button onClick={handle}>click</button>
      </div>
    );
  });
