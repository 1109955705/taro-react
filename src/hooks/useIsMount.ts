import { useRef, useEffect } from 'react';

// 判断是否是首次加载, 比如useEffect首次不加载
export default () => {
  const isMountRef = useRef(false);

  useEffect(() => {
    isMountRef.current = true;
  }, []);

  return isMountRef.current;
};
