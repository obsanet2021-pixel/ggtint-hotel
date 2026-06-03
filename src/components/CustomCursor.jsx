import { useEffect, useRef } from 'react';
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = mousePos.current.x + 'px';
        cursorRef.current.style.top = mousePos.current.y + 'px';
      }
    };
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      requestAnimationFrame(animateRing);
    };
    document.addEventListener('mousemove', onMouseMove);
    animateRing();
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);
  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};
export default CustomCursor;
