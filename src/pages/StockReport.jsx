import React, { useEffect, useState } from 'react';
import { fetchStockReport } from '../api/stockApi';
import TiltCard from '../components/TiltCard';

function StockReport() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchStockReport();
  }, []);

  const fetchStockReport = async () => {
    try {
      const res = await fetchStockReport();
      setReportData(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch stock report data');
    }
  };

  return (
    <AnimatedPage>
    <div style={{ padding: '20px' }}>
      <h2>Stock Report</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock In</th>
            <th>Stock Out</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reportData.length > 0 ? reportData.map((item, index) => (
            <tr key={`report-${index}`}>
              <td>{item.product_name}</td>
              <td>{item.total_stock_in}</td>
              <td>{item.total_stock_out}</td>
              <td>{item.date}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="4">No report data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
     </AnimatedPage>
  );
}

export default StockReport;
