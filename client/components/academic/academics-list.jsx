"use client";
import React from "react";
import { useUnivercityContext } from "@/context/univercity-context";
import { getRandomElements } from "@/helpers/getRandomElement";
import { AcademicsDataTable } from "./data-table";
import { columns } from "./columns";

export const AcademicsList = ({ random = false }) => {
  const { mergedData } = useUnivercityContext();

  let randomItems = JSON.parse(JSON.stringify(mergedData));
  const randomFiveItem = getRandomElements(randomItems);
  const displayedData = random ? randomFiveItem : mergedData;

  return <AcademicsDataTable data={displayedData} columns={columns} />;
};
