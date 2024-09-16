"use client";
import { InfoCard } from "./info-card";
import React, { useEffect, useState } from "react";
import { useUniversityContext } from "@/context/university-context";

export const InfoCardList = () => {
  const { mergedData, academics } = useUniversityContext();
  const [englishCount, setEnglish] = useState();
  const [accreditationCount, setAccreditation] = useState();

  useEffect(() => {
    const english = mergedData.filter((el) => el.undergraduate.english == true);
    setEnglish(english.length);

    const accreditation = mergedData.filter(
      (el) => el.accreditation !== "Hayır"
    );
    setAccreditation(accreditation.length);
  }, [mergedData]);

  const titles = [
    "Toplam Üniversite Sayısı",
    "Akademisyen Sayısı",
    "Eğitim Dili İngilizce Olan Üniversiteler",
    "Akreditasyonu Olan Üniversite Sayısı",
  ];
  const values = [
    mergedData.length,
    academics.length,
    englishCount,
    accreditationCount,
  ];
  const description = [
    "Psikoloji bölümü bulunan üniversiteler",
    "Psikoloji bölümlerinde yer alan akademisyenler",
    "Psikoloji bölümünün eğitim dili İngilizce olan üniversiteler",
    "Psikoloji bölümü akredite olan üniversite sayısı",
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
