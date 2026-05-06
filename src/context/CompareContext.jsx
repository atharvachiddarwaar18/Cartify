import React, { createContext, useState } from 'react';


export const CompareContext = createContext();


export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (product) => {
    const isAlreadyAdded = compareList.some(item => item.id === product.id);

    if (isAlreadyAdded) {

      setCompareList(compareList.filter(item => item.id !== product.id));
    } else {

      if (compareList.length >= 4) {
        alert("You can only compare up to 4 products at a time!");
        return;
      }
      setCompareList([...compareList, product]);
    }
  };


  const isInCompareList = (productId) => {
    return compareList.some(item => item.id === productId);
  };

  return (
    <CompareContext.Provider value={{ compareList, toggleCompare, isInCompareList }}>
      {children}
    </CompareContext.Provider>
  );
};