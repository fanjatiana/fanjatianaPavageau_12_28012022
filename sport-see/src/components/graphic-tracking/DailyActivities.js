import propTypes from "prop-types";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "../../styles/dailyActivities_block.css";
const DailyActivities = ({ dataActivity }) => {
  // function allowing the display of the index from 1 and not from 0
  const formatDate = (index) => index + 1;

  // function to update tooltip values ​​(user data) when hovering over the graph with the mouse
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value}g`}</p>
          <p>{` ${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dailyActivities_block">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataActivity}
          barGap="10%"
          margin={{
            top: 30,
            right: 0,
            left: 15,
            bottom: 50,
          }}
        >
          <CartesianGrid
            strokeDasharray="3"
            vertical={false}
            stroke="#dedede"
          />

          <XAxis
            dy={15}
            tickLine={false}
            axisLine={true}
            stroke="#dedede"
            tickFormatter={formatDate}
            dataKey={dataActivity.index}
            tick={{ fill: "#9B9EAC" }}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC" }}
            dx={15}
          />
          <Tooltip
            content={<CustomTooltip />}
            position={{ y: 10 }}
            wrapperStyle={{
              width: "72px",
              color: "#FFF",
              height: "90px",
              backgroundColor: "#E60000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "40px",
              fontSize: "0.8em",
              textAlign: "center",
              padding: "1em 0",
            }}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
            }}
          />
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: -20, right: 0 }}
          />
          <Bar
            dataKey="kilogram"
            name="poids (kg)"
            fill="#282D30"
            barSize={15}
            radius={[30, 30, 0, 0]}
          />
          <Bar
            radius={[30, 30, 0, 0]}
            barSize={15}
            dataKey="calories"
            name="calories brûlées (kCal)"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

DailyActivities.propTypes = {
  dataActivity: propTypes.array.isRequired,
};

export default DailyActivities;
