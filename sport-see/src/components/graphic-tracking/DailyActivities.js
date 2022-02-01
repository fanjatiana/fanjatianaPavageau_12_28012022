import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const DailyActivities = (props) => {
  const { dataActivity } = props;
  console.log(dataActivity);

  return (
    <div>
 <BarChart
      width={835}
      height={320}
      
      data={dataActivity}
      margin={{
        top: 5,
        right: 0,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" name="poids(kg)" fill="#282D30" />
      <Bar dataKey="calories" name = "calories brûlées (kCal)" fill="#E60000" />
    </BarChart>
    </div>
   
  );
};

export default DailyActivities;
