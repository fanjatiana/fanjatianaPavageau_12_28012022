import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../../styles/typeOfActivities_block.css";
const replaceNumbers = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

const formatKind = (kind) => replaceNumbers[kind];
const TypeOfActivities = ({ dataPerformance }) => {
  console.log(dataPerformance.data);
  return (
    <div className="typeOfActivities_block">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={dataPerformance.data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} />
          <PolarRadiusAxis />
          <Radar
            name=""
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TypeOfActivities;
