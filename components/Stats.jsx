"use client";

import CountUp from "react-countup";
import { useState, useEffect } from "react";

export const Stats = () => {
  const [yearsExperience, setYearsExperience] = useState(3);

  const stats = [
    {
      num: yearsExperience,
      text: "Jahre Erfahrung",
      showPlus: true
    },
    {
      num: 20,
      text: "Abgeschlossene Projekte",
      showPlus: false
    },
    {
      num: 8,
      text: "Beherrschte Technologien",
      showPlus: false
    },
    {
      num: 700,
      text: "Code Commits",
      showPlus: false
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYearsExperience((years) => years + 1);
    }, 1000 * 60 * 60 * 24 * 365);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                 /*  delay={2} */
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                {item.showPlus && (
                  <span className="text-3xl xl:text-3xl" style={{marginLeft: "-10px"}}>+</span>
                )}

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
