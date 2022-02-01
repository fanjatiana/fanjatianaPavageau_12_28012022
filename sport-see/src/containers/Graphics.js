import React from "react";
import AverageScore from "../components/graphic-tracking/AverageScore";
import DailyActivities from "../components/graphic-tracking/DailyActivities";
import DurationSessions from "../components/graphic-tracking/DurationSessions";
import TypeOfActivities from "../components/graphic-tracking/TypeOfActivities";

const Graphics = (props) => {
  const { data } = props;
  return (
    <div className="graphics_container">
      <DailyActivities dataActivity={data.ACtivity.sessions} />
      <DurationSessions dataAverageSessions={data.AverageSessions} />
      <TypeOfActivities dataPerformance={data.Performance.kind} />
      <AverageScore dataScore={data.Performance.data} />
    </div>
  );
};

export default Graphics;
