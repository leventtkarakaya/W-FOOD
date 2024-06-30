"use client";
import React from "react";
import dynamic from "next/dynamic";

const MapDynamic = dynamic(() => import("@/components/MapDynamic"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Map = () => {
  return (
    <div>
      <MapDynamic />
    </div>
  );
};
export default Map;
