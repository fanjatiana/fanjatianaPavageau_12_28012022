import axios from "axios";
import { useEffect, useState } from "react";


export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);

    async function fetchData() {
      try {

        const {data: response} = await axios.get(url);
        setData(response);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);
  return { isLoading, data, error };
}
