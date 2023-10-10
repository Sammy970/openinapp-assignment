"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SideBar from "@/components/dashboard/SideBar";
import MainDash from "@/components/dashboard/MainDash";
import TopBar from "@/components/dashboard/TopBar";

const page = () => {
  const session = useSession();
  // console.log(session);
  return (
    <main className="flex min-h-screen max-lg:flex-col">
      <section className="w-1/4 max-lg:hidden">
        <SideBar />
        {/* <h1>Dashboard Page</h1>
        <button onClick={() => signOut("google")}>Sign Out</button> */}
      </section>
      <section className="max-lg:block hidden">
        <TopBar />
      </section>
      <section className="w-3/4 max-lg:w-full">
        <MainDash />
      </section>
    </main>
  );
};

export default page;
