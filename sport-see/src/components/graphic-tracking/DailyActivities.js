import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const DailyActivities = (props) => {
 const {dataActivity} = props;
 console.log(dataActivity)
    const data = [
        {
            name: '1', calorie: 4000, poids: 2400, day: 2400,
        },
        {
            name: '2', calorie: 3000, poids: 1398, day: 2210,
        },
        {
            name: '3', calorie: 2000, poids: 9800, day: 2290,
        },
        {
            name: '4', calorie: 2780, poids: 3908, day: 2000,
        },
        {
            name: '5', calorie: 1890, poids: 4800, day: 2181,
        },
        {
            name: '6', calorie: 2390, poids: 3800, day: 2500,
        },
        {
            name: '7', calorie: 3490, poids: 4300, day: 2100,
        },
    ];
    
   return (
    <BarChart
    width={835}
    height={320}
    data={data}
    margin={{
        top: 5, right: 0, left: 20, bottom: 5,
    }}
>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis
  
     />
    <Tooltip />
    <Legend />
    <Bar dataKey="poids" fill="#282D30"
 />
    <Bar dataKey="calorie" fill="#E60000"  />
</BarChart>
   ) 
    
};

export default DailyActivities;