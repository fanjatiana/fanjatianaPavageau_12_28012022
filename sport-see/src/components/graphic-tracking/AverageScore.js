import propTypes from "prop-types";
import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
} from "recharts";
import "../../styles/averageScore_block.css";

const AverageScore = (props) => {
  console.log(props);
  const COLORS = ["#FF0000"];
  return (
    <div className="averageScore_block">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="70%"
          startAngle={90}
          data={[props]}
        >
          <PolarAngleAxis domain={[0, 100]} type="number" tick={false} />
          <RadialBar
            barSize={10}
            minAngle={15}
            label={{ position: "center", fill: "#000" }}
            fill="#FF0000"
            dataKey="dataScore"
            cornerRadius={5}
          />
          {/*<Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle=""
          />*/}
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageScore.propTypes = {
  dataScore: propTypes.number.isRequired,
};

export default AverageScore;
