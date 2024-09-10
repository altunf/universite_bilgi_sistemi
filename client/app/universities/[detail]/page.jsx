import React from "react";
import { UniversityProfile } from "@/components/university/university-profile";

export default function UniversityDetailPage({ params }) {
  console.log(params.detail, "params");

  return (
    <div>
      <UniversityProfile id={params.detail} />
    </div>
  );
}
