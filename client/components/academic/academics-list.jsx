"use client";
import React from "react";

import { columnsShort } from "@/components/academic/columns";
import { useUnivercityContext } from "@/context/univercity-context";
import { DataTable } from "../data-table";

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
  return (
    <DataTable
      data={academicsData}
      columns={columnsShort}
      perPage={6}
      searchTerm={"fullName"}
    />
  );
};
