import React from 'react';
import './transaction.css';
const Transaction = () => {
  return (
    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
      <div className="text-md-center text-xl-left">
        <h6 className="mb-1">Transfer to Paypal</h6>
        <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
      </div>
      <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
        <h6 className="font-weight-bold mb-0">$236</h6>
      </div>
    </div>
  );
};
export default Transaction;
