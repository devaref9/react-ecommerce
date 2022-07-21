import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json.data);
      setLoading(false);
    };
    loadPost();

  }, [url]);

  return { data, loading };
}
export default useFetch;
