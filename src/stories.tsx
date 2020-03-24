import React, { createElement } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, object } from '@storybook/addon-knobs';
import useFader from './index';

export default {
  title: 'useFader',
  decorators: [withKnobs],
};

export const Default = () =>
  createElement(() => {
    const [ref, show, setShow] = useFader<HTMLDivElement>({
      initialShow: boolean('initialShow', true),
      duration: number('duration', 0.3),
      onEnter: action('enter'),
      onEntered: action('entered'),
      onExit: action('exit'),
      onExited: action('exited'),
    });
    function handleClick() {
      setShow(!show);
    }
    return (
      <div className="demo-1">
        <div className="demo-1__item">
          <div ref={ref}>target</div>
        </div>
        <button className="demo-1__btn" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    );
  });

export const SetDurationDifferently = () =>
  createElement(() => {
    const [ref, show, setShow] = useFader<HTMLDivElement>({
      initialShow: boolean('initialShow', true),
      duration: object('duration', {
        show: 0.5,
        hide: 0.3,
      }),
      onEnter: action('enter'),
      onEntered: action('entered'),
      onExit: action('exit'),
      onExited: action('exited'),
    });
    function handleClick() {
      setShow(!show);
    }
    return (
      <div className="demo-1">
        <div className="demo-1__item">
          <div ref={ref}>target</div>
        </div>
        <button className="demo-1__btn" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    );
  });
