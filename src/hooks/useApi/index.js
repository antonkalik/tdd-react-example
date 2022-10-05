import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(url);

      setData(response.data.slice(0, 50));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};
