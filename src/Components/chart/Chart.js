import React, { Component, useState } from 'react';
import { Pie } from 'react-chartjs-2';
const Chart = ({ data }) => {
  return (
    <div>
      <Pie data={data}></Pie>
    </div>
  );
};

export default Chart;
