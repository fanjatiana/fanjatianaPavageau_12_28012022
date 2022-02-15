import { useEffect, useState } from "react";

// fonction fetch data depuis le micro API
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

    // l.24 : gestion des erreurs et du chargement de la page si la requête a échoué (necessite toutes les données du tableau)
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
