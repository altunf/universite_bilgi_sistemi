"use client";
import React from "react";
import { AcademicsDataTable } from "./data-table";
import { columns } from "@/components/academic/columns";
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

  return <AcademicsDataTable data={academicsData} columns={columns} />;
};
