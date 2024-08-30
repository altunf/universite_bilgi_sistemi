import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UnivercityList } from "@/components/univercity/univercity-list";

export default function Univercities() {
  return (
    <div className="flex h-full w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Üniversiteler</CardTitle>
              <CardDescription>145 üniversite listeleniyor ...</CardDescription>
            </CardHeader>
            <CardContent>
              <UnivercityList random={false} />
            </CardContent>
            {/* <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter> */}
          </Card>
        </main>
      </div>
    </div>
  );
}
