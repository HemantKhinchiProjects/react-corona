import React, { Component, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
const Chart = ({ data }) => {
  return (
    <div>
      <Doughnut data={data}></Doughnut>
    </div>
  );
};

export default Chart;
