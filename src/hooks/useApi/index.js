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
      const { data } = await axios({
        method: "get",
        url,
      });

      setData(data.slice(0, 50));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
