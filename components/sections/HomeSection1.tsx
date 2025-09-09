
import React from "react";


const HomeSection1 = () => {
  return (
    <section className="section bg-green-900 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            The first <span className="gradient-text">AI-powered</span> Mortgage
          </h2>
          <p className="text-green-200 text-lg md:text-xl">
            Our tech unlocks lower rates, higher chances of approval,
            and a lightning-fast process from approval to closing. Over $100 billion funded.
          </p>
          <div className="mt-6">
            <a
              href="/start"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-full transition-all"
            >
              Start my pre-approval
            </a>
          </div>
          <p className="text-green-300 text-sm mt-4">
            ⏱ 3 min &nbsp;|&nbsp; No hard credit check
          </p>
        </div>
        <div className="md:w-1/2 relative h-[400px] w-full flex justify-center">
          <div className="relative h-[400px] w-[200px]">
         
          </div>
          <div className="absolute top-8 left-1/4 bg-green-800 text-white p-4 rounded-lg shadow-md w-48">
            <p className="text-xs">Congrats, you're pre-approved for a loan up to</p>
            <p className="font-bold text-lg text-green-400">$450,000</p>
          </div>
          <div className="absolute top-32 right-0 bg-green-800 text-white p-3 rounded-lg shadow-md w-40">
            <p className="text-xs">You don't need perfect credit to qualify.</p>
            <p className="font-bold text-sm text-green-400">580 FICO</p>
          </div>
          <div className="absolute bottom-10 left-1/3 bg-green-800 text-white p-3 rounded-lg shadow-md w-44">
            <p className="text-xs">Instant answers anytime, anywhere with Betsy™ AI.</p>
          </div>
          <div className="absolute bottom-20 right-1/4 bg-green-800 text-white p-3 rounded-lg shadow-md w-44">
            <p className="text-xs">See your customized rate options in seconds.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;