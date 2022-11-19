import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = (prop) => {
  return (
    <div style={prop.style}>
      <h1>ChartComponent</h1>
      <div>
        <Line
          data={{
            labels: prop.label,
            datasets: [
              {
                label: "dataset",
                data: prop.price,
                borderColor: "blue",
                backgroundColor: "rgba(0,0,0,04)",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Chart.js Line Chart",
              },
            },
          }}
        />
        {console.log(prop.price, prop.label)}
      </div>
    </div>
  );
};

export default ChartComponent;
