"use client";
import React from "react";
import { TableBody } from "../ui/table";
import { useUnivercityContext } from "@/context/univercity-context";
import { UniversityRow } from "./univercity-row";
import { getRandomElements } from "@/helpers/getRandomElement";

export const UnivercityList = ({ random = false }) => {
  const { mergedData } = useUnivercityContext();

  let randomItems = JSON.parse(JSON.stringify(mergedData));
  const randomFiveItem = getRandomElements(randomItems);
  const displayedDate = random ? randomFiveItem : mergedData;

  return (
    <TableBody>
      {displayedDate?.map((el, index) => (
        <UniversityRow key={index} university={el} />
      ))}
    </TableBody>
  );
};
