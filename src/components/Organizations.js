import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ role, organization, time, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {role}&nbsp;
          <span className="text-primary dark:text-primaryDark capitalize">
            @{organization}
          </span>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <ul className="font-medium w-full md:text-sm list-disc pl-4 mt-2">
          {work.map((item, index) => (
            <li key={index} className="mt-1">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Organizations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Organizational Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            role="Academic Division Staff"
            organization="Himpunan Mahasiswa Informatika ITB"
            time="Aug 2025 – Dec 2025"
            work={[
              "Collected and organized learning resources and academic notes to support learning accessibility for fellow students within the cohort.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Organizations;
