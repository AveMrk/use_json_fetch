import { useEffect, useState } from "react";

export default function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false)
        setError(true)});
  }, [url]);
  return [data, loading, error];
}
