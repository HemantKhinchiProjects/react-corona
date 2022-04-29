import React, { useState } from 'react';
import Data from './data';
import Card from './card/Card';
const DashBordMeters = () => {
  const [dailyData, setDelyData] = useState(Data);
  return (
    <div>
      <Card dailyDsta={dailyData} />
    </div>
  );
};
export default DashBordMeters;
