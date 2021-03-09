import React from 'react';
import { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const Chart = () => {
      const data = [
            {
              name: "Page A",
              uv: 4000,
              pv: 2400,
              amt: 2400
            },
            {
              name: "Page B",
              uv: 3000,
              pv: 1398,
              amt: 2210
            },
            {
              name: "Page C",
              uv: 2000,
              pv: 9800,
              amt: 2290
            },
            {
              name: "Page D",
              uv: 2780,
              pv: 3908,
              amt: 2000
            },
            {
              name: "Page E",
              uv: 1890,
              pv: 4800,
              amt: 2181
            },
            {
              name: "Page F",
              uv: 2390,
              pv: 3800,
              amt: 2500
            },
            {
              name: "Page G",
              uv: 3490,
              pv: 4300,
              amt: 2100
            }
          ];
      const [opacity, setOpacity] = useState({
            uv: 1,
            pv: 1
          });
        
          const handleMouseEnter = useCallback(
            (o) => {
              const { dataKey } = o;
        
              setOpacity({ ...opacity, [dataKey]: 0.5 });
            },
            [opacity, setOpacity]
          );
        
          const handleMouseLeave = useCallback(
            (o) => {
              const { dataKey } = o;
              setOpacity({ ...opacity, [dataKey]: 1 });
            },
            [opacity, setOpacity]
          );
      return (
            <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Line
          type="monotone"
          dataKey="pv"
          strokeOpacity={opacity.pv}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          strokeOpacity={opacity.uv}
          stroke="#82ca9d"
        />
      </LineChart>
      <p className="notes">Tips: Hover the legend !</p>
    </div>
  );
}
      

export default Chart;