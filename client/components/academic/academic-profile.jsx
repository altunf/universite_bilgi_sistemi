"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import ProfileCard from "./profile-card";
import { ExternalLink, Layers2 } from "lucide-react";
import ProfileDetail from "./profile-detail";
import { ProfileHeader } from "./profile-header";
import { useUniversityContext } from "@/context/university-context";

export const AcademicProfile = ({ id }) => {
  const { academics } = useUniversityContext();
  const [showDetails, setShowDetails] = useState(false);
  const academic = academics[id];

  return (
    <div className="flex flex-col w-full bg-background">
      <ProfileHeader academic={academic} />
      <div className="container mx-auto max-w-8xl py-12 px-4 md:px-6 flex flex-col gap-12">
        <section>
          <div className="flex items-center justify-end">
            <Button
              variant="default"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Kısaltılmış Görünüm" : "Detaylı Görünüm"}{" "}
              <Layers2 className="w-4  h-4 ml-4 " />
            </Button>
          </div>{" "}
          <h2 className="text-2xl font-semibold mb-4">Temel Bilgiler</h2>
          <div className="grid grid-cols-4 gap-6 mt-6">
            <ProfileCard
              title="Doktora Sonrası"
              description="(Post Doctorate)"
              content={academic?.postDoc}
            />
            <ProfileCard
              title="Doktora"
              content={[
                `${academic?.phd.department} `,
                `${academic?.phd.university} - ${academic?.phd.graduationYear}`,
              ]}
            />
            <ProfileCard
              title="Yüksek Lisans"
              content={[
                `${academic?.master.department}`,
                `${academic?.master.university}`,
              ]}
            />
            <ProfileCard
              title="Lisans"
              content={[
                `${academic?.undergraduate?.department}`,
                `${academic?.undergraduate?.university}`,
              ]}
            />
            <ProfileCard
              title="Scopus Atıf Sayısı"
              content={academic?.scopus.cite}
            />
            <ProfileCard
              title="Scopus H-Index"
              content={academic?.scopus.hIndex}
            />
            <ProfileCard
              title="Scopus Makale Sayısı"
              content={academic?.scopus.article}
            />
            <ProfileCard
              title="Scopus Linki"
              content={
                academic?.scopus.link ? (
                  <a
                    href={academic?.scopus.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      Sayfaya Git <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                ) : (
                  " - "
                )
              }
            />
          </div>
        </section>
        <section>
          {showDetails && (
            <h2 className="text-2xl font-semibold mb-4">Detaylı Bilgiler</h2>
          )}
          {showDetails && <ProfileDetail academic={academic} />}
        </section>
      </div>
    </div>
  );
};
