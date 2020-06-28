import React, { PropsWithChildren } from 'react';
import { animated, useSpring } from 'react-spring';

interface Props extends PropsWithChildren<{}> {
  src: string;
  speed?: number;
  imgOffset?: number;
}

const ParallaxBackground: React.FC<Props> = ({
  children,
  speed,
  src,
  imgOffset,
}) => {
  const [element, setElement] = React.useState(undefined);
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const calc = (o: number) => `translateY(${o * speed + imgOffset}px)`;

  const onScroll = () => {
    const posY = element.getBoundingClientRect().top;
    const offset = window.pageYOffset - window.pageYOffset - posY;
    set({ offset });
  };

  React.useEffect(() => {
    if (window) {
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  });

  console.log(offset);
  return (
    <div
      ref={el => setElement(el)}
      style={{ position: 'relative', overflowY: 'hidden', height: 500 }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <animated.img
          src={src}
          alt="girl-reading"
          style={{
            minWidth: '100%',
            transform: offset.interpolate(calc),
          }}
        />
      </div>
      {children}
    </div>
  );
};

ParallaxBackground.defaultProps = {
  speed: -0.5,
  imgOffset: 0,
};

export default ParallaxBackground;
