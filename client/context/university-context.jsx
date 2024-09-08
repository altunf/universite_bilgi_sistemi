import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "@/data/data";
import { mergeAndConvertData } from "@/data/convertData";

const UniversityContext = createContext({});

export const UniversityContextProvider = ({ children }) => {
  const [mergedData, setMergedData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    const convertedData = mergeAndConvertData(data);
    setMergedData(convertedData);

    const randomItems = JSON.parse(JSON.stringify(convertedData));

    let academicsData = [];

    randomItems?.forEach((personel) => {
      const academicStaff = personel.academicStaff;
      const updatedStaff = academicStaff.map((staff) => ({
        ...staff,
        university: personel.university,
      }));

      academicsData.push(...updatedStaff);
    });

    setAcademics(academicsData);
  }, []);

  const values = { mergedData, detailData, setDetailData, academics };
  return (
    <UniversityContext.Provider value={values}>
      {children}
    </UniversityContext.Provider>
  );
};

export const useUniversityContext = () => useContext(UniversityContext);
