import { useEffect, useState, useCallback } from 'react';
// 异步更新下获取最新状态
const useSyncCallback = (callback) => {
  const [proxyState, setProxyState] = useState({ current: false });

  const Func = useCallback(() => {
    setProxyState({ current: true });
  }, [proxyState]);

  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false });
  }, [proxyState]);

  useEffect(() => {
    proxyState.current && callback();
  });

  return Func;
};

export default useSyncCallback;
