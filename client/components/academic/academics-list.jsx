"use client";
import React from "react";
import { AcademicsDataTable } from "./academics-data-table";
import { columnsShort } from "@/components/academic/columns";
import { useUnivercityContext } from "@/context/univercity-context";

export const AcademicsList = () => {
  const { mergedData } = useUnivercityContext();

  const randomItems = JSON.parse(JSON.stringify(mergedData));

  let academicsData = [];

  randomItems?.forEach((personel) => {
    const academicStaff = personel.academicStaff;
    const updatedStaff = academicStaff.map((staff) => ({
      ...staff,
      univercity: personel.univercity,
    }));

    academicsData.push(...updatedStaff);
  });

  console.log(academicsData);
  return <AcademicsDataTable data={academicsData} columns={columnsShort} />;
};
