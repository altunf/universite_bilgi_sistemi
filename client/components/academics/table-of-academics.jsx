"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const TableOfAcedemics = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Akademisyenler</CardTitle>
          <CardDescription>
            Rastgele seçilen akademisyenler görüntülenir
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/academics">
            Tamamını Gör
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Jackson Lee</p>
            <p className="text-sm text-muted-foreground">
              jackson.lee@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
            <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$299.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/04.png" alt="Avatar" />
            <AvatarFallback>WK</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">William Kim</p>
            <p className="text-sm text-muted-foreground">will@email.com</p>
          </div>
          <div className="ml-auto font-medium">+$99.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/05.png" alt="Avatar" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-sm text-muted-foreground">
              sofia.davis@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
      </CardContent>
    </Card>
  );
};
