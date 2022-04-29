import React from 'react';
import Transaction from './Transaction';
import './transactionhistory.css';
const TransactionHistory = (props) => {
  return (
    <div className="col-md-4 grid-margin stretch-card">
      
          <h4 className="card-title">Transaction History</h4>
          <Transaction />
          <Transaction />
          {/* {props.children} */}
        
    </div>
  );
};
export default TransactionHistory;
