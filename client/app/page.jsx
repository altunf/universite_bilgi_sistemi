import { InfoCardList } from "@/components/info-card-list";
import { TableOfAcedemics } from "@/components/academics/table-of-academics";
import { RandomUnivercities } from "@/components/univercity/random-univercities";

export default function Home() {
  return (
    <main className="flex flex-1  gap-4 md:gap-8 md:p-8 h-full w-full flex-col p-4">
      <InfoCardList />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <RandomUnivercities />
        <TableOfAcedemics />
      </div>
    </main>
  );
}
