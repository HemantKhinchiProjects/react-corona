import React from 'react';
import Transaction from './Transaction';
import CardStyle from '../ui/CardStyle';
import './transactionhistory.css';
const TransactionHistory = (props) => {
  return (
    <div className="col-md-4 grid-margin stretch-card">
      <CardStyle>
        <h4 className="card-title">Transaction History</h4>
        <Transaction />
        <Transaction />
      </CardStyle>
    </div>
  );
};
export default TransactionHistory;
