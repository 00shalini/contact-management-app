import { Chart, ChartConfiguration , registerables} from "chart.js";
import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);
interface ChartData {
  cases: any;
  // Chart data structure
}

interface DashboardChartsProps {
  data: ChartData;
}

function DashboardCharts({ data }: DashboardChartsProps) {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const casesData = data.cases;
    const dates = Object.keys(casesData);
    const cases = Object.values(casesData);

    const graphData = {
      labels: dates,
      datasets: [
        {
          label: 'Cases',
          data: cases,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    chartRef.current = new Chart(
      chartCanvasRef.current as HTMLCanvasElement,
      {
        type: 'line',
        data: graphData as ChartConfiguration<"line", number[], string>['data'],
      }
    );
  }, [data]);

  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);

  
  return (
    <div>
      <h3 className=" h-20 pt-5 font-bold text-2xl ml-96 font-mono">Line chart </h3>
       <canvas style={{width:'500px',marginLeft:'200px'}}  ref={chartCanvasRef} />
    </div>
  );
}

export default DashboardCharts;
