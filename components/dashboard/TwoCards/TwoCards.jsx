import React from "react";
import TopProducts from "./TopProducts";
import Profile from "./Profile";

const TwoCards = () => {
  return (
    <section className="mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-10">
      <TopProducts />
      <Profile />
    </section>
  );
};

export default TwoCards;
