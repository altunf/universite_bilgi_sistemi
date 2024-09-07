import React from "react";

export default function UnivercityDetailPage({ params }) {
  console.log(params, "params");
  return <div>UnivercityDetailPage {params.detail} </div>;
}
