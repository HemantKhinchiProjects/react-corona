import React, { useState } from 'react';
import Data from './data';
import Card from './card/Card';
const DashBordMeters = () => {
  const [dailyData] = useState(Data);
  return (
    <div className="row">
      {dailyData.map((info) => {
        const { id, dec, amount, groth, img } = info;
        return (
          <Card key={id} dec={dec} amount={amount} groth={groth}  />
        );
      })}
    </div>
  );
};
export default DashBordMeters;
