import LeftSide from "@/components/login/LeftSide";
import RightSide from "@/components/login/RightSide";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-1 min-h-screen">
      <section className="w-2/5 bg-[#4285F4] ">
        <LeftSide />
      </section>
      <section className="w-3/5">
        <RightSide />
      </section>
    </main>
  );
};

export default page;
