"use client";
import { useUnivercityContext } from "@/context/univercity-context";
import { UserRoundSearch } from "lucide-react";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const AcademicProfile = ({ id }) => {
  const { academics } = useUnivercityContext();
  console.log(academics[id]);

  return (
    <main className="flex flex-1 md:p-8 h-full w-full min-h-screen flex-col  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>
            {`${academics[id]?.title} ${academics[id]?.fullName}`}
          </CardTitle>
          <CardDescription className=" capitalize">
            {academics[id]?.univercity}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-6">
          <div>
            <UserRoundSearch
              size={300}
              strokeWidth={0.4}
              className="border-2 rounded-2xl border-current"
            />
          </div>
          <ol>
            <li>
              {" "}
              Lisans:{" "}
              {`${academics[id]?.undergraduate?.univercity} - ${academics[id]?.undergraduate?.department}`}
            </li>
            <li>
              {" "}
              Yüksek Lisans:{" "}
              {`${academics[id]?.master?.univercity} - ${academics[id]?.master?.department}`}
            </li>
            <li>
              {" "}
              Doktora:{" "}
              {`${academics[id]?.phd?.univercity} - ${academics[id]?.phd?.department}`}
            </li>
          </ol>
        </CardContent>
      </Card>
    </main>
  );
};
