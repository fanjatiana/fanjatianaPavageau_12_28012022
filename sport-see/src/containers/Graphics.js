import React from "react";
import AverageScore from "../components/graphic-tracking/AverageScore";
import DailyActivities from "../components/graphic-tracking/DailyActivities";
import DurationSessions from "../components/graphic-tracking/DurationSessions";
import TypeOfActivities from "../components/graphic-tracking/TypeOfActivities";
import "../styles/graphics_container.css";

const Graphics = (props) => {
  const { data } = props;
  return (
    <div className="graphics_container">
      <DailyActivities dataActivity={data.ACtivity.sessions} dataAverageSessions={data.AverageSessions}  />
      <DurationSessions dataAverageSessions={data.AverageSessions} />
      <TypeOfActivities dataPerformance={data.Performance} />
      <AverageScore dataScore={data.Performance.data} />
    </div>
  );
};

export default Graphics;
