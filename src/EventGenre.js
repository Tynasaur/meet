import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export default function EventGenre({ events }) {
  const [data, setData] = useState([]);

  const colors = ["#CC633E", "#3D314A", "#685F74", "#CA054D", "#91B7C7"];

  useEffect(() => {
    setData(() => getData());
    // eslint-disable-next-line
  }, [events]);

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const data = genres.map((genre) => {
      const number = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      return { genre, number };
    });
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={50}
          outerRadius={100}
          fill="#D0ABA0"
          dataKey="number"
          label={({ genre, percent }) => {
            if (percent > 0) {
              return `${(percent * 100).toFixed(0)}% ${genre}`;
            }
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        <Legend verticalAlign="top" height={36} />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
