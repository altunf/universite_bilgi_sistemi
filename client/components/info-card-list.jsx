"use client";
import { InfoCard } from "./info-card";
import React, { useEffect, useState } from "react";
import { useUniversityContext } from "@/context/university-context";

export const InfoCardList = () => {
  const { mergedData } = useUniversityContext();
  const [englishCount, setEnglish] = useState();

  useEffect(() => {
    const english = mergedData.filter((el) => el.undergraduate.english == true);
    setEnglish(english.length);
  }, [mergedData]);

  const titles = [
    "Toplam Üniversite Sayısı",
    "Akademisyen Sayısı",
    "Vakıf Üniversitesi Sayısı",
    "Vakıf Üniversitesi Sayısı",
  ];
  const values = [145, 1355, englishCount, 125];
  const description = [
    "Psikoloji bölümü bulunan üniversiteler",
    "Psikoloji bölümlerinde yer alan akademisyenler",
    "Psikoloji bölümü bulunan vakıf üniversiteleri",
    "Psikoloji bölümü bulunan vakıf üniversiteleri",
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {titles?.map((el, index) => (
        <InfoCard
          key={index}
          title={el}
          value={values[index]}
          desc={description[index]}
        />
      ))}
    </div>
  );
};
