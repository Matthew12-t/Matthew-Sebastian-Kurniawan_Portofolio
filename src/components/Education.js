import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
          {type}
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm mt-2">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Information Systems and Technology"
            time="Aug 2023 – Present"
            place="Bandung Institute of Technology (ITB), GPA 3.54 / 4.00"
            info="Minor in Data Science & Artificial Intelligence. Coursework in Artificial Intelligence, Machine Learning, Data Mining and Strategic Algorithms, with strong foundations in Algorithms and Data Structures (C) and Object-Oriented Programming (Java), plus end-to-end web application development covering system design, requirement analysis, implementation and testing."
          />

          <Details
            type="Global Consumer Intelligence (GCI) Course 2025"
            time="Sep 2025 – Dec 2025"
            place="University of Tokyo, Online (Japan)"
            info="Data science course run by the Matsuo-Iwasawa Laboratory, Graduate School of Engineering, covering machine learning fundamentals, data analysis workflows and practical AI modeling. Passed the final assessment."
          />

          <Details
            type="Academic Division Staff"
            time="Aug 2025 – Dec 2025"
            place="Himpunan Mahasiswa Informatika ITB"
            info="Collected and organized learning resources and academic notes to support learning accessibility for fellow students within the cohort."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
