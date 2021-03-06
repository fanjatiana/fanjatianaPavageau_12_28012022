import propTypes from "prop-types";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "../../styles/durationSessions_block.css";

const DurationSessions = ({ dataAverageSessions }) => {

  // function to modify the values ​​of the X axis
  const listOfDaysOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const formatDate = (day, index) => {
    day = listOfDaysOfTheWeek[index];
    return day;
  };

  // function to update tooltip values ​​(user data) when hovering over the graph with the mouse
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].payload.sessionLength}`} min</p>
        </div>
      );
    }
    return null;
  };

  // function allowing  display and customization of the decorative rectangle when hovering over the graph
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
      <div className="graphic_title">
        <h3>Durée moyenne des sessions</h3>
      </div>
      <ResponsiveContainer width="90%" height="100%">
        <AreaChart
          data={dataAverageSessions}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={formatDate}
            fontSize="12px"
            stroke="rgba(255,255,255,0.7"
            padding={{ right: 10, left: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide={true} domain={["dataMin", "dataMax+20"]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            wrapperStyle={{
              fontSize: "12px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              padding: "0px 5px 15px",
              width:"39px",
              height:"25px"
            }}
          />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            fill="rgba(255, 255, 255, 0.15)"
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
