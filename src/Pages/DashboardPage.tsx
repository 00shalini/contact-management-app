import React from 'react';
import { useQuery } from 'react-query';
import { fetchChartData, fetchMapData } from '../api';
import DashboardCharts from '../Components/DashboardCharts';
import DashboardMap from '../Components/DashboardMap';

function DashboardPage() {
  const { data: chartData, isLoading: isChartLoading } = useQuery('chartData', fetchChartData);
  const { data: mapData, isLoading: isMapLoading } = useQuery('mapData', fetchMapData);

  if (isChartLoading || isMapLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardCharts data={chartData}/>
      <DashboardMap data={mapData} />
    </div>
  );
}

export default DashboardPage;
