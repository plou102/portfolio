import React, { createContext } from 'react';
import data from 'data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const images = data.map(item => {
    return item.image;
  });

  return <DataContext.Provider value={{ images, data }}>{children}</DataContext.Provider>;
};

export default DataContext;
