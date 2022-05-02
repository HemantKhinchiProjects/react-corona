import React from 'react';
import DashBordMeters from '../../Components/DashbordMeter/DashbordMeters';
import TransactionHistory from '../../Components/transactionHistory/TransactionHistory';
import OpenProjects from '../../Components/openProjeact/OpenProjects';
import SalseMetor from '../../Components/salseMetor/SalseMetor';
const Dashbord = () => {
  return (
    <>
      <DashBordMeters />
      <div className="row">
        <TransactionHistory />
        <OpenProjects />
      </div>
      <div className="row">
        <SalseMetor />
      </div>
    </>
  );
};
export default Dashbord;
