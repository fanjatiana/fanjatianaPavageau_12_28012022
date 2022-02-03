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
const DailyActivities = (props) => {
  const { dataActivity, dataAverageSessions } = props;
  console.log(dataActivity);
  console.log(dataAverageSessions);

  return (
    <div className="dailyActivities_block">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          /*border radius */

          data={dataActivity}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 50,
          }}
        >
          <CartesianGrid
            strokeDasharray="3"
            vertical={false}
            stroke="#dedede"
          />

          <XAxis tickLine={false} />

          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend
            iconType="circle"
            width="50%"
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

export default DailyActivities;
