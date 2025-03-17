import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'transform 0.2s ease';
    cursor.style.zIndex = '1000';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const growCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    };

    const shrinkCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', growCursor);
    window.addEventListener('mouseup', shrinkCursor);
    window.addEventListener('touchmove', moveCursor);
    window.addEventListener('touchstart', growCursor);
    window.addEventListener('touchend', shrinkCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', growCursor);
      window.removeEventListener('mouseup', shrinkCursor);
      window.removeEventListener('touchmove', moveCursor);
      window.removeEventListener('touchstart', growCursor);
      window.removeEventListener('touchend', shrinkCursor);
      document.body.removeChild(cursor);
    };
  }, []);
};

export default useCustomCursor;