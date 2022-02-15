import propTypes from "prop-types";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../../styles/typeOfActivities_block.css";

const TypeOfActivities = ({ dataPerformance }) => {
  // fonction pour modifier les valeurs du composant PolarAngleAxis
  const replaceNumbers = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  const formatKind = kind => replaceNumbers[kind];

  return (
    <div className="typeOfActivities_block">
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ margin: "auto" }}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          innerRadius="10%"
          data={[...dataPerformance.data].reverse()}
           >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatKind}
            dx={2}
            dy={2}
            tickLine={false}
            tick={{fontSize:12, fontWeight:500}}
            stroke="#FFF"/>
          <Radar
            name=""
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

TypeOfActivities.propTypes = {
  dataPerformance: propTypes.object.isRequired,
};

export default TypeOfActivities;
