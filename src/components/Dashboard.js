import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token'); // Ambil token dari localStorage

      const response = await fetch('http://localhost:5000/api/transactions', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setTransactions(data);
      } else {
        alert(data.message);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: {transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
