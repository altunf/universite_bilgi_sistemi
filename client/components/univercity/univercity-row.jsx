import Image from "next/image";
import { TableCell, TableRow } from "../ui/table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const UniversityRow = ({ university }) => (
  <TableRow>
    <TableCell className="hidden sm:table-cell">
      <Image
        alt="Product image"
        className="aspect-square rounded-md object-cover"
        height="64"
        src="/placeholder.svg"
        width="64"
      />
    </TableCell>
    <TableCell className="font-medium">{university["Üniversite"]}</TableCell>
    <TableCell>
      <Badge variant="outline">{university["Akreditasyon"]}</Badge>
    </TableCell>
    <TableCell className="hidden md:table-cell">
      {university["Lisans Programı"].ingilizce ? "İngilizce" : "Türkçe"}
    </TableCell>
    <TableCell className="hidden md:table-cell">
      {university["Akademik Personel"].length}
    </TableCell>
    <TableCell className="hidden md:table-cell">
      {university["YKS"][0].sıra}
    </TableCell>
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  </TableRow>
);
