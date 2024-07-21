import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/HomePage"), { ssr: false });
import React from "react";

const page = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default page;
