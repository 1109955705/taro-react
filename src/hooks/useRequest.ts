import { useState, useEffect } from 'react';
import http from '@/api/http.ts'

const useRequest = (url, data, config) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const request = async () => {
    setLoading(true);
    try {
      const result = await http({
        url,
        params: data,
        method: 'get',
      });
      if (result && result.status >= 200 && result.status <= 304) {
        setResult(result.data);
      } else {
        setError(new Error('get data error in useRequest'));
      }
    } catch (reason) {
      setError(reason);
    }
    setLoading(false);
  };
  useEffect(() => {
    request();
  }, []);

  return {
    loading,
    result,
    error,
  };
};

export default useReqeust;