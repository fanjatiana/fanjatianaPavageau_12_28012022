import propTypes from "prop-types";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../styles/durationSessions_block.css";

const DurationSessions = (props) => {
  const { dataAverageSessions } = props;
  console.log(dataAverageSessions);
  const week = ["L", "M", "M", "J", "V", "S", "D"];
  console.log(week);
  const dateFormatter = (day) => {
    day.toString();
  };

  return (
    <div className="durationSessions_block">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={dataAverageSessions}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

          <XAxis dataKey="day" 
          type = "string"
          tickFormatter={dateFormatter} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#FF0000"
            fill="#FF0000"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
DurationSessions.propTypes = {
  dataAverageSessions: propTypes.array.isRequired
}
export default DurationSessions;
