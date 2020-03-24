# React Hooks Fader

React Hooks that fadeIn / Out elements - [DEMO(storybook)](https://uyeong.github.io/react-hooks-fader)

## Installation

### npm

```bash
npm install --save react-hooks-fader
yarn add react-hooks-fader
```

### Usage

```tsx
import useFader from 'react-hooks-fader';

const SomeComponent = () => {
  const [ref, _, setShow] = useFader<HTMLDivElement>();
  function handleClick() {
    setShow(false);
  }
  return (
    <div ref={ref}>
      {/* contents... */}
      <button onClick={handleClick}>
        Close
      </button>
    </div>
  );
};
```

## Options

```tsx
interface Options {
  initialShow?: boolean;
  duration?: number | {
    show: number;
    hide: number;
  };
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
}
```

Try it on the [demo](https://uyeong.github.io/react-hooks-fader) site!

Thanks!.
