import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UnivercitiesList } from "@/components/univercity/univercities-list";

export default function Univercities() {
  return (
    <main className="flex flex-1 md:p-8 h-full w-full flex-col  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Üniversiteler</CardTitle>
          <CardDescription>145 üniversite listeleniyor ...</CardDescription>
        </CardHeader>
        <CardContent>
          <UnivercitiesList random={false} />
        </CardContent>
      </Card>
    </main>
  );
}
