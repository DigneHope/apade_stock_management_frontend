import React, { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stockInList, setStockInList] = useState([
    { id: 1, product: 'Product A', quantity: 100, date: '2025-05-01' },
    { id: 2, product: 'beans', quantity: 150, date: '2025-05-02' },
    { id: 3, product: 'sugar', quantity: 80, date: '2025-05-03' },
  ]);
  const [stockOutList, setStockOutList] = useState([]);

  const addStockIn = (entry) => {
    setStockInList([...stockInList, { ...entry, id: stockInList.length + 1 }]);
  };

  const addStockOut = (entry) => {
    setStockOutList([...stockOutList, { ...entry, id: stockOutList.length + 1 }]);
  };

  return (
    <StockContext.Provider value={{ stockInList, stockOutList, addStockIn, addStockOut }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => React.useContext(StockContext);