import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useStock } from '../../context/StockContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './StockReport.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StockReport() {
  const { darkMode } = useContext(ThemeContext);
  const { stockInList, stockOutList } = useStock();

  // Merge stockInList and stockOutList
  const combinedData = stockInList.map((item) => {
    const stockOutForProduct = stockOutList
      .filter((out) => out.product === item.product)
      .reduce((total, out) => total + (out.quantity || 0), 0);
    return {
      ...item,
      stockIn: item.quantity || 0,
      stockOut: stockOutForProduct,
      totalStock: (item.quantity || 0) - stockOutForProduct,
    };
  });

  const chartData = {
    labels: combinedData.map((item) => item.product),
    datasets: [
      {
        label: 'Stock In',
        data: combinedData.map((item) => item.stockIn),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Stock Out',
        data: combinedData.map((item) => item.stockOut),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Stock',
        data: combinedData.map((item) => item.totalStock),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Stock Report' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Quantity' },
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          },
        },
      },
      x: {
        title: { display: true, text: 'Product' },
      },
    },
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={`stock-report ${darkMode ? 'dark' : ''}`}>
      <button className="back-arrow" onClick={handleBack}>
        <span className="arrow-icon">←</span>
      </button>
      <h2>Stock Report</h2>
      <div className="report-container">
        <div className="chart-wrapper">
          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="table-wrapper">
          <div className="stock-report-table">
            <h3>Stock Summary</h3>
            <div className="table-scroll">
              <table className="stock-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Stock In</th>
                    <th>Stock Out</th>
                    <th>Total Stock</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {combinedData.length > 0 ? (
                    combinedData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.product}</td>
                        <td>{item.stockIn.toLocaleString()}</td>
                        <td>{item.stockOut.toLocaleString()}</td>
                        <td>{item.totalStock.toLocaleString()}</td>
                        <td>{item.date}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No stock data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockReport;