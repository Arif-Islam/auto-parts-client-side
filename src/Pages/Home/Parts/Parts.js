import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import Spinner from "../../../Shared/Spinner";
import PartsCard from "./PartsCard";

const Parts = () => {
  // if (isLoading) {
  //     return <Spinner></Spinner>;
  // }

  // refetch();

  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://auto-parts-server-rnsc.onrender.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
    setIsLoading(false);
  }, [parts]);

  //   if (isLoading) {
  //     return <Spinner></Spinner>;
  //   }

  return (
    <div>
      <div className=" py-10">
        <p className="text-center text-2xl lg:text-3xl font-medium mb-3">
          Best Auto Parts
        </p>
        <hr className="w-24 mx-auto border-black" />
      </div>
      <div className="w-11/12 md:w-4/5 mx-auto pb-16 mb-6">
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {!parts.length && (
            <p className="text-red-500 text-lg lg:text-xl py-5">
              Please wait. Data fetching from render.com may take a minute (more
              or less). Or try refreshing the page after a minute. Sorry for the
              delay!🙏
            </p>
          )}
          {[...parts]
            .reverse()
            .slice(0, 6)
            .map((part) => (
              <PartsCard key={part._id} part={part}></PartsCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Parts;
