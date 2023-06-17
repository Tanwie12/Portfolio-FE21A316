import React from 'react';

function useEventListener(eventName, handler, element = document) {
  const savedHandler = React.useRef();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default function AnimatedCursor({
  color = '220, 90, 90',
  outerAlpha = 0.4,
  innerSize = 10,
  outerSize = 10,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = React.useRef(null);
  const cursorInnerRef = React.useRef(null);
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(true);
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveClickable, setIsActiveClickable] = React.useState(false);
  const endX = React.useRef(0);
  const endY = React.useRef(0);

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = clientY + 'px';
      cursorInnerRef.current.style.left = clientX + 'px';
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = coords.y + 'px';
          cursorOuterRef.current.style.left = coords.x + 'px';
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef] // eslint-disable-line
  );

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  const onMouseDown = React.useCallback(() => setIsActive(true), []);
  const onMouseUp = React.useCallback(() => setIsActive(false), []);
  const onMouseEnter = React.useCallback(() => setIsVisible(true), []);
  const onMouseLeave = React.useCallback(() => setIsVisible(false), []);

  useEventListener('mousemove', onMouseMove, document);
  useEventListener('mousedown', onMouseDown, document);
  useEventListener('mouseup', onMouseUp, document);
  useEventListener('mouseenter', onMouseEnter, document);
  useEventListener('mouseleave', onMouseLeave, document);

  React.useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `scale(${outerScale})`;
      }
    } else {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = 'scale(1)';
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = 'scale(1)';
      }
    }
  }, [innerScale, outerScale, isActive]);

  React.useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
      }
    }
  }, [innerScale, outerScale, isActiveClickable]);

  React.useEffect(() => {
    if (isVisible) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.opacity = 1;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.opacity = 1;
      }
    } else {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.opacity = 0;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.opacity = 0;
      }
    }
  }, [isVisible]);

  React.useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );

    const mouseoverHandler = () => {
      setIsActive(true);
    };
    const clickHandler = () => {
      setIsActive(true);
      setIsActiveClickable(false);
    };
    const mousedownHandler = () => {
      setIsActiveClickable(true);
    };
    const mouseupHandler = () => {
      setIsActive(true);
    };
    const mouseoutHandler = () => {
      setIsActive(false);
      setIsActiveClickable(false);
    };

    clickables.forEach((el) => {
      el.style.cursor = 'none';

      el.addEventListener('mouseover', mouseoverHandler);
      el.addEventListener('click', clickHandler);
      el.addEventListener('mousedown', mousedownHandler);
      el.addEventListener('mouseup', mouseupHandler);
      el.addEventListener('mouseout', mouseoutHandler);
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', mouseoverHandler);
        el.removeEventListener('click', clickHandler);
        el.removeEventListener('mousedown', mousedownHandler);
        el.removeEventListener('mouseup', mouseupHandler);
        el.removeEventListener('mouseout', mouseoutHandler);
      });
    };
  }, [isActive]);

  const styles = {
    cursor: {
      zIndex: 999,
      position: 'fixed',
      opacity: 1,
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
    },
    cursorInner: {
      position: 'fixed',
      borderRadius: '50%',
      width: innerSize,
      height: innerSize,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, 1)`,
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
    },
    cursorOuter: {
      zIndex: 999,
      position: 'fixed',
      borderRadius: '50%',
      pointerEvents: 'none',
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
    },
  };

  return (
    <React.Fragment>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </React.Fragment>
  );
}
