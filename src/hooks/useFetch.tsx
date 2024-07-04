import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../types";

export default function useFetch(url: string) {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(url);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
        console.error("GET fetch 실패.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
