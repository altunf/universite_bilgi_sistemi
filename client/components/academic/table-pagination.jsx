import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../ui/select";

export function TablePagination({ table }) {
  return (
    <div className="flex items-center justify-end space-x-6 py-4">
      <span className="flex items-center gap-1">
        Sayfaya git:
        <Input
          type="number"
          min="1"
          max={table.getPageCount()}
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
        />
      </span>
      Sayfa başı gösterim:
      <Select
        defaultValue={table.getState().pagination.pageSize}
        onValueChange={(value) => table.setPageSize(Number(value))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sayfa başı gösterim" />
        </SelectTrigger>
        <SelectContent>
          {[7, 10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={pageSize}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="flex items-center gap-1">
        <div>Sayfa</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} /{" "}
          {table.getPageCount().toLocaleString()}
        </strong>
      </span>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Geri
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          İleri
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
      </div>
    </div>
  );
}
