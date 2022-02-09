import { registry } from "chart.js";
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
  const { dataScore } = props;
  const score =
    dataScore.id === 18 ? dataScore.score * 100 : dataScore.todayScore * 100;

  const customTick = () => {
    const value = score;
    const text1 = "de votre";
    const text2 = "objectif";
    return (
      <>
        <text
          x={"41.5%"}
          y={"49%"}
          fill="#282D30"
          fontSize="26px"
          fontWeight={700}
        >
          {value + "%"}
        </text>
        <text
          x={"39%"}
          y={"59%"}
          fill="#282D30"
          fontSize="16px"
          fontWeight={500}
        >
          {text1}
        </text>
        <text
          x={"39.5%"}
          y={"68%"}
          fill="#282D30"
          fontSize="16px"
          fontWeight={500}
        >
          {text2}
        </text>
      </>
    );
  };

  return (
    <div className="averageScore_block">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="70%"
          startAngle={90}
          data={[dataScore]}
        >
          <PolarAngleAxis domain={[0, 100]} type="number" tick={customTick} />
          <RadialBar
            barSize={10}
            minAngle={15}
            label={false}
            fill="#FF0000"
            dataKey={score}
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageScore.propTypes = {
  dataScore: propTypes.object.isRequired,
};

export default AverageScore;
