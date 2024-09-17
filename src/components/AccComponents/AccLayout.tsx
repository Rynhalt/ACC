import React from "react";
import Contact from "./Contact";
import GuaranteedImprovement from "./GuaranteedImprovement";
import Header from "./Header";
import PathForBetterWork from "./PathForBetterWork";
import WhatIsAcc from "./WhatIsAcc";
const AccLayout: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F1eb5b9c7fef443f098cbcbba80d89655" sizes="any" />
      </head>
    <main className="flex overflow-y-scroll h-screen flex-col bg-white snap-y snap-mandatory">
      <div className="snap-always snap-center">
        <Header />
      </div>
      <div className="snap-always snap-center">
        <WhatIsAcc />
      </div>
      <div className="snap-always snap-center">
        <PathForBetterWork />
      </div>
      {/* <div className="snap-always snap-center">
        <SafeAndSound />
      </div> */}
      <div className="snap-always snap-center">
        <GuaranteedImprovement />
      </div>

      {/* <div className="snap-always snap-center">
        <Test />
      </div> */}
      <div className="snap-always snap-center">
        <Contact />
      </div>
    </main>
    </html>
  );
};

export default AccLayout;
