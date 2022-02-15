import propTypes from "prop-types";
import React from "react";
import AverageScore from "../components/graphic-tracking/AverageScore";
import DailyActivities from "../components/graphic-tracking/DailyActivities";
import DurationSessions from "../components/graphic-tracking/DurationSessions";
import TypeOfActivities from "../components/graphic-tracking/TypeOfActivities";
import "../styles/graphics_container.css";

const Graphics = ({ data }) => {
  return (
    <div className="graphics_container">
      <DailyActivities dataActivity={data.ACtivity.sessions} />
      <DurationSessions dataAverageSessions={data.AverageSessions} />
      <TypeOfActivities dataPerformance={data.Performance} />
      <AverageScore
        dataScore={
          data.Infos.score
            ? data.Infos.score * 100
            : data.Infos.todayScore * 100
        }
      />
    </div>
  );
};

Graphics.propTypes = {
  data: propTypes.object.isRequired,
};

export default Graphics;
