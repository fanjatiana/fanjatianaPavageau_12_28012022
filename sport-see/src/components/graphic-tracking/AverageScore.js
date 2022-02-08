import propTypes from "prop-types";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../../styles/averageScore_block.css";

const AverageScore = (props) => {
  const { dataScore } = props;
  console.log(dataScore);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return <div className="averageScore_block">
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
         
            data={dataScore}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>
  </div>;
};

AverageScore.propTypes = {
  dataScore: propTypes.array.isRequired
}

export default AverageScore;
