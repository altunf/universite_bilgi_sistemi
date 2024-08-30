import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Table } from "@/components/ui/table";

import { UnivercityHeader } from "./univercity-header";
import { UnivercityList } from "./univercity-list";

export const RandomUnivercities = () => {
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Üniversiteler</CardTitle>
          <CardDescription>
            Rastgele seçilen üniversiteler görüntülenir
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/univercities">
            Tamamını Gör
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <UnivercityHeader />
          <UnivercityList random={true} />
        </Table>
      </CardContent>
    </Card>
  );
};
