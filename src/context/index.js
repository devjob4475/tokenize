import React, { createContext, useContext, useState } from 'react';
import Post from '../service/post';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
const [data, setData] = useState({name:"",surname:"",creditcard:"",passportid:"",email:"",bankacno:"",balance:"",active:false,datatoken:[]});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {data.active?<><Post/></>:""}
      {children}
    </DataContext.Provider>
  );
};
