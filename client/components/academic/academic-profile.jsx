"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import { ExternalLink, UserRoundSearch } from "lucide-react";
import { useUniversityContext } from "@/context/university-context";

export const AcademicProfile = ({ id }) => {
  const { academics } = useUniversityContext();
  const [showDetails, setShowDetails] = useState(false);
  console.log(academics[id]);
  return (
    <div className="flex flex-col w-full bg-background">
      <header className="bg-primary text-primary-foreground  px-4 md:px-6 flex items-center justify-start py-8">
        <div className="container mx-auto max-w-6xl flex items-center gap-4">
          <UserRoundSearch
            size={150}
            strokeWidth={0.4}
            className="border-2 rounded-2xl border-current"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              {` ${academics[id]?.fullName}`}
            </h1>{" "}
            <p className="text-sm text-primary-foreground/80  mt-3 capitalize">
              {`${academics[id]?.subField} `}
            </p>
            <p className="text-sm text-primary-foreground/80 mt-3">
              {`${academics[id]?.title} `}
            </p>{" "}
            <p className="text-sm text-primary-foreground/80  mt-3 capitalize">
              {`${academics[id]?.university} `}
            </p>
          </div>
        </div>
      </header>
      <div className="container mx-auto max-w-8xl py-12 px-4 md:px-6 flex flex-col gap-12">
        <section>
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Kapat" : "Detaylı Gör"}
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-6">
            {/* EDUCATION  */}
            <Card>
              <CardHeader>
                <CardTitle>Doktora Sonrası </CardTitle>
                <CardDescription>(Post Doctorate)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-lg font-medium">
                      {` ${academics[id]?.postDoc}`}
                    </h4>
                  </div>
                </div>
              </CardContent>
            </Card>{" "}
            <Card>
              <CardHeader>
                <CardTitle>Doktora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-lg font-medium">
                      {` ${academics[id]?.phd?.department}`}
                    </h4>
                    <p>
                      {` ${academics[id]?.phd?.university}`} -
                      {` ${academics[id]?.phd?.graduationYear}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Yüksek Lisans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-lg font-medium">
                      {` ${academics[id]?.master?.department}`}
                    </h4>
                    <p>{` ${academics[id]?.master?.university}`}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lisans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-lg font-medium">
                      {` ${academics[id]?.undergraduate?.department}`}
                    </h4>
                    <p>{` ${academics[id]?.undergraduate?.university}`}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* SCOPUS  */}
            <Card>
              <CardHeader>
                <CardTitle>Scopus Atıf Sayısı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {` ${academics[id]?.scopus?.cite}`}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scopus H-Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {` ${academics[id]?.scopus?.hIndex}`}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scopus Makale Sayısı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {` ${academics[id]?.scopus?.article}`}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scopus Linki</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {academics[id]?.scopus?.link == "" ? (
                    " - "
                  ) : (
                    <a href={`${academics[id]?.scopus?.link}`} target="_blank">
                      <Button>
                        Sayfaya Git <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
            {/* Adjusted  */}{" "}
            <Card>
              <CardHeader>
                <CardTitle>Düzeltilmiş Makale Sayısı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {` ${academics[id]?.adjustedArticleCount}`}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Düzeltilmiş H-Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {academics[id]?.adjustedHIndex}
                </div>
              </CardContent>
            </Card>{" "}
            {/* Keywords  */}{" "}
            <Card>
              <CardHeader>
                <CardTitle>Anahtar Kavramlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="">{academics[id]?.keyWords}</div>
              </CardContent>
            </Card>
            {/* Medical Speciality */}{" "}
            <Card>
              <CardHeader>
                <CardTitle>Tıpta Uzmanlık Alanı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="">{academics[id]?.medicalSpeciality}</div>
              </CardContent>
            </Card>
          </div>
        </section>
        {showDetails && (
          <section>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <section>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Projeler</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <li>
                        Uluslararası -{" "}
                        {` ${academics[id]?.projects?.international}`} proje
                      </li>
                      <li>
                        TÜBİTAK - {` ${academics[id]?.projects?.tubitak}`} proje
                      </li>{" "}
                      <li>BAP - {` ${academics[id]?.projects?.bap}`} proje</li>{" "}
                      <li>
                        Diğer - {` ${academics[id]?.projects?.other}`} proje
                      </li>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Yetiştirilen Öğrenci Sayısı</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        Yüksek Lisans (YÖKSİS) -
                        {` ${academics[id]?.graduateStudentCount?.yoksisYl}`}{" "}
                      </div>{" "}
                      <div>
                        Yüksek Lisans (TEZYÖK) -
                        {` ${academics[id]?.graduateStudentCount?.tezyokYl}`}{" "}
                      </div>
                      <hr className="mt-2 mb-2" />
                      <div>
                        Doktora (YÖKSİS) -
                        {` ${academics[id]?.graduateStudentCount?.yoksisDr}`}{" "}
                      </div>{" "}
                      <div>
                        Doktora (TEZYÖK) -
                        {` ${academics[id]?.graduateStudentCount?.tezyokDr}`}{" "}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
