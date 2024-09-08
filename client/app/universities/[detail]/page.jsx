import React from "react";

export default function UniversityDetailPage({ params }) {
  console.log(params, "params");
  return <div>UniversityDetailPage {params.detail} </div>;
}
