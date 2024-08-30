import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "@/data/data";
import { mergeAndConvertData } from "@/data/convertData";

const UnivercityContext = createContext({});

export const UnivercityContextProvider = ({ children }) => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const convertedData = mergeAndConvertData(data);

    setMergedData(convertedData);
  }, []);
  const values = { mergedData };
  return (
    <UnivercityContext.Provider value={values}>
      {children}
    </UnivercityContext.Provider>
  );
};

export const useUnivercityContext = () => useContext(UnivercityContext);
