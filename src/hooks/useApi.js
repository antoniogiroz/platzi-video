import { useState, useEffect } from 'react';

const useApi = (api) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return data;
};

export default useApi;
