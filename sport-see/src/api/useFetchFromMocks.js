import { useEffect, useState } from "react";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mockData.js";

export const useFetchByIdFromMockedData = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error] = useState(false);

  useEffect(() => {

    // tableau des données mockées
    const mockedData = [
      USER_MAIN_DATA,
      USER_ACTIVITY,
      USER_AVERAGE_SESSIONS,
      USER_PERFORMANCE,
    ];

    if (!id) return;
    setLoading(true);

    // on filtre les données en fonction de l'id
    const arrayData = mockedData.map((array) =>
      array.filter((obj) => obj.id === parseInt(id))
    );
    const [Infos, Activity, AverageSessions, Performance] = arrayData;

    setData({
      Infos: Infos[0],
      ACtivity: Activity[0],
      AverageSessions: AverageSessions[0].sessions,
      Performance: Performance[0],
    });

    setLoading(false);

  }, [id]);
  return { isLoading, data,error};
};
