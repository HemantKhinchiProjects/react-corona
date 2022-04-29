import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import CardStyle from '../ui/CardStyle';
import Chart from '../../Components/chart/Chart';
import './transactionhistory.css';
const TransactionHistory = (props) => {
  const [percentage, setpercentage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setpercentage(80);

    setData({
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 171, 0, 1)',
            'rgba(0, 210, 91, 1)',

            'rgba(17, 17, 17, 1)',
          ],
          borderWidth: 0,
        },
      ],
    });
  }, [setpercentage, setData]);

  return (
    <div className="col-md-4 grid-margin stretch-card">
      <CardStyle>
        <h4 className="card-title">Transaction History</h4>
        <Chart data={data} />
        <Transaction />
        <Transaction />
      </CardStyle>
    </div>
  );
};
export default TransactionHistory;
