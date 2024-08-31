import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "@/data/data";
import { mergeAndConvertData } from "@/data/convertData";
import universities from "@/data/universities";

const UnivercityContext = createContext({});

export const UnivercityContextProvider = ({ children }) => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const convertedData = mergeAndConvertData(data);
    let a = [];
    const academicsList =
      convertedData?.map((personel, index) => {
        const academicStaff = personel["Akademik Personel"];
        const updatedStaff = academicStaff.map((staff) => ({
          ...staff,
          univercity: personel["Üniversite"], // Yeni eklemek istediğiniz alan ve değeri
        }));

        a.push(updatedStaff);
      }) || [];
    console.log(convertedData);

    console.log(a.flat(1), "adsd");

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
