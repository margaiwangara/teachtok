import { useState } from 'react';
import { apiRequest } from '../lib/request';
import { Method } from 'axios';

export function useRequest() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async (method: Method, url: string) => {
    setIsLoading(true);
    try {
      const response = await apiRequest(method, url);

      setError(null);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    makeRequest,
    error,
    data,
    isLoading,
  };
}
