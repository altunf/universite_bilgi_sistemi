"use client";
import React from "react";

import { columnsShort } from "@/components/academic/columns";
import { useUnivercityContext } from "@/context/univercity-context";
import { DataTable } from "../data-table";

export const AcademicsList = () => {
  const { academics } = useUnivercityContext();

  return (
    <DataTable
      data={academics}
      columns={columnsShort}
      perPage={6}
      searchTerm={"fullName"}
    />
  );
};
