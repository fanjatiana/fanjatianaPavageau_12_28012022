import React from "react";
import HelloUser from "../components/HelloUser";
import CalorieCounter from "./CalorieCounter";
import "../styles/main.css";
import { useParams } from "react-router-dom";
import { useFetchById } from "../api/useFetch";
import NotFound from "../pages/NotFound";

const Main = () => {
  const url = useParams();
  const userId = url.id;
  const { isLoading, data, error } = useFetchById(userId);
  console.log(data)
  
if(error) return <NotFound />
  
if (isLoading)  return <>is loading</>
   return (
    <main id="main_container">
      <HelloUser name={data.Infos.userInfos.firstName} />
      <CalorieCounter />
    </main>
  );
};

export default Main;
