import propTypes from "prop-types";
import React, { PureComponent } from "react";
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
const DailyActivities = (props) => {
  const { dataActivity } = props;
  console.log(dataActivity);
  const formatDate = (index) => {
    return index + 1;
  };

  const CustomTooltip = ({ active, payload, label }) => {
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
          margin={{
            top:30,
            right: 0,
            left: 0,
            bottom: 50,
          }}
        >
          <CartesianGrid
            strokeDasharray="3"
            vertical={false}
            stroke="#FBFBFB"
          />

          <XAxis
            tickLine={false}
            stroke="#dedede"
            tickFormatter={formatDate}
          />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip
            content={<CustomTooltip />}
            position={{ y: -20 }}
            wrapperStyle={{
              width: "auto",
              color:"#FFF",
              height: 90,
              backgroundColor: "#E60000",
              display: "flex",
              flexDirection: "column",
              justifyContent:"center",
              alignContent :"space-between",
              alignItems:"center",
              flexWrap: "wrap",
              padding : "1em",
              fontSize:"0.8em"
            }}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
              strokeWidth: 1,
            }}
          />
          <Legend
            iconType="circle"
            width="50%"
            layout="horizontal"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: -40, right: 0 }}
          />
          <Bar
            dataKey="kilogram"
            name="poids(kg)"
            fill="#282D30"
            barSize={10}
            radius={[30, 30, 0, 0]}
          />
          <Bar
            radius={[30, 30, 0, 0]}
            barSize={10}
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
