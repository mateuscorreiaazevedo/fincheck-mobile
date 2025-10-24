import { useEffect, useState } from 'react';

export function useBankAccountsSummaryViewModel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function load() {
      const delay = 1000;

      new Promise(resolve => setTimeout(resolve, delay)).finally(() => {
        setIsLoading(false);
      });
    }

    load();
  }, []);

  return {
    isLoading,
  };
}
