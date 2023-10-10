"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  // console.log(session);
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={() => signOut("google")}>Sign Out</button>
    </div>
  );
};

export default page;
