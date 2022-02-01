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
        const { data: response } = await axios.get(url);
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

export function useFetchById(id) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const userId = "http://localhost:3000/user/" + id;
    const activity = userId + "/activity";
    const averageSessions = userId + "/average-sessions";
    const performance = userId + "/performance";
    const arrayUrls = [userId, activity, averageSessions, performance];
    if (!id) return;
    setLoading(true);

    async function fetchData() {
      Promise.all(
        arrayUrls.map((url) =>
          fetch(url).then((response) => {
            if (response.status !== 200) {
              setError(true);
              setLoading(false);
            }
            return response.json();
          })
        )
      ).then((userData) => {
        console.log(userData)
        const [Infos, Activity, AverageSessions, Performance] = userData;
        setData({
          Infos: Infos.data,
          ACtivity: Activity.data,
          AverageSessions: AverageSessions.data.sessions,
          Performance: Performance.data,
        });
        setLoading(false);
      });
    }

    fetchData();
  }, [id]);
  return { isLoading, data, error };
}
