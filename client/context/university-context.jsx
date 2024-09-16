import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "@/data/data";
import { mergeAndConvertData } from "@/data/convertData";
import { getRandomElements } from "@/helpers/getRandomElement";

const UniversityContext = createContext({});

export const UniversityContextProvider = ({ children }) => {
  const convertedData = mergeAndConvertData(data);
  const randomFiveItem = getRandomElements(convertedData);

  const [mergedData, setMergedData] = useState(randomFiveItem);
  const [detailData, setDetailData] = useState([]);
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    setMergedData(mergeAndConvertData(data));

    let academicsData = [];

    convertedData?.forEach((personel) => {
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
