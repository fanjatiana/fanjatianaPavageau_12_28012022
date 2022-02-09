import propTypes from "prop-types";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "../../styles/durationSessions_block.css";

const DurationSessions = (props) => {
  const { dataAverageSessions } = props;
  const week = ["L", "M", "M", "J", "V", "S", "D"];

  const formatDate = (day, index) => {
    day = week[index];
    return day;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].payload.sessionLength}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = ({ points, width, height }) => {
    const { x, y } = points[0];
    return (
      <Rectangle
        fill="rgba(0, 0, 0, 0.2)"
        margin="10px"
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  return (
    <div className="durationSessions_block">
      <ResponsiveContainer width="90%" height="100%">
        <AreaChart
          data={dataAverageSessions}
          margin={{
            top: 10,
            right: 0,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="day" tickFormatter={formatDate} />
          <YAxis hide={true} domain={["dataMin", "dataMax+20"]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor/>}
            wrapperStyle={{
              width: "10%",
              color: "#000",
              height: 20,
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
              textAlign: "center",
              fontSize: "0.8em",
            }}
          />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            fill="#FFF"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
DurationSessions.propTypes = {
  dataAverageSessions: propTypes.array.isRequired,
};
export default DurationSessions;
