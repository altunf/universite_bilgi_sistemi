import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui/table";

export const UnivercityHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="hidden w-[100px] sm:table-cell">
          <span className="sr-only">Image</span>
        </TableHead>
        <TableHead>Üniversite Adı</TableHead>
        <TableHead>Akreditasyon</TableHead>
        <TableHead className="hidden md:table-cell">Eğitim Dili</TableHead>
        <TableHead className="hidden md:table-cell">Öğr. Gör. Sayısı</TableHead>
        <TableHead className="hidden md:table-cell">YKS Sıralaması</TableHead>
        <TableHead>
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};
