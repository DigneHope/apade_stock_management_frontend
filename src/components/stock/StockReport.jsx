// components/stock/StockReport.jsx
import React, { useEffect, useState } from "react";
import { getStockReport } from "../../api/stockApi";

const StockReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      const data = await getStockReport();
      setReport(data);
    };
    fetchReport();
  }, []);

  return (
    <div>
      <h2>Stock Report</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock In</th>
            <th>Stock Out</th>
          </tr>
        </thead>
        <tbody>
          {report.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.stockIn}</td>
              <td>{item.stockOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockReport;
