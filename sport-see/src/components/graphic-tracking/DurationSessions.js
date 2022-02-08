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
} from "recharts";
import "../../styles/durationSessions_block.css";

const DurationSessions = (props) => {
  const { dataAverageSessions } = props;
  console.log(dataAverageSessions);
  const week = ["L", "M", "M", "J", "V", "S", "D"];

 /* const a = {

    1 : "L",
    2 : "M",
    3 : "M",
    4 : "J",
    5: "V",
    6: "S",
    7 : "D",

  }*/
  const formatDate = (day, index) => {
    console.log(day)
    console.log(week[index])
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
          <YAxis  hide={true} domain={["dataMin", "dataMax+20"]} />
          <Tooltip
       
            content={<CustomTooltip />}
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
