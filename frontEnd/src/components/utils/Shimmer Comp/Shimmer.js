import React from "react";

const Shimmer = () => {
  return (
    <section>
      <div className="lg:h-96 md:h-52 xs:h-44 bg-lightGray w-full"></div>
      <div className="relative md:py-20 xs:py-10 grid grid-cols-2 items-center gap-y-10 ">
        {Array(8)
          .fill("")
          .map((index) => {
            return (
              <div key={index} className="mx-auto animate-pulse">
                <div className="bg-lightGray lg:w-96 lg:h-52 md:w-66 md:h-44 xs:w-44 xs:h-32 rounded-2xl"></div>
                <div className="md:w-72 md:h-8 xs:w-40 xs:h-2 bg-lightGray rounded-2xl mt-5"></div>
                <div className="md:w-60 md:h-8 xs:w-32 xs:h-2 bg-lightGray rounded-2xl my-4"></div>
                <div className="md:w-44 md:h-8 xs:w-20 xs:h-2 bg-lightGray rounded-2xl"></div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Shimmer;
