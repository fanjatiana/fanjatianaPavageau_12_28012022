import { useEffect, useState } from "react";

// fetch data function from the micro API
export const useFetchById = (id) => {
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

    // l.24: management of errors and page loading if the request failed (requires all the data in the arrayUrls)
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
};
