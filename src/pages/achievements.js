import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import hackathonImg from "../../public/images/achievements/hackathon.webp";

const FramerImage = motion(Image);

const FeaturedAward = ({ img, title, place, event, organizer, year, summary }) => (
  <li className="relative col-span-1 w-full rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark">
    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

    <div className="w-full overflow-hidden rounded-lg">
      <FramerImage
        src={img}
        alt={title}
        className="h-auto w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>

    <div className="mt-4 flex flex-col items-start">
      <span className="text-lg font-medium text-primary dark:text-primaryDark md:text-base">
        {place} &mdash; {year}
      </span>
      <h2 className="my-1 w-full text-left text-3xl font-bold lg:text-2xl">
        {event}
      </h2>
      <span className="font-medium text-dark/60 dark:text-light/60">
        {organizer}
      </span>
      <p className="mt-3 font-medium md:text-sm">{summary}</p>
    </div>
  </li>
);

const Award = ({ place, event, organizer, year }) => (
  <motion.li
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: "spring" }}
    className="relative flex w-full flex-col items-start justify-between rounded-2xl
    border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark"
  >
    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:rounded-[1.5rem]" />
    <span className="text-lg font-medium text-primary dark:text-primaryDark md:text-base">
      {place}
    </span>
    <h2 className="my-1 w-full text-left text-2xl font-bold lg:text-xl">
      {event}
    </h2>
    <span className="font-medium text-dark/60 dark:text-light/60 md:text-sm">
      {organizer} &middot; {year}
    </span>
  </motion.li>
);

const Certification = ({ title, issuer, period, summary }) => (
  <motion.li
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: "spring" }}
    className="relative flex w-full flex-col items-start justify-between rounded-2xl
    border border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark sm:p-6"
  >
    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:rounded-[1.5rem]" />
    <span className="text-lg font-medium text-primary dark:text-primaryDark md:text-base">
      {period}
    </span>
    <h2 className="my-1 w-full text-left text-3xl font-bold lg:text-2xl">
      {title}
    </h2>
    <span className="font-medium text-dark/60 dark:text-light/60">{issuer}</span>
    <p className="mt-3 font-medium md:text-sm">{summary}</p>
  </motion.li>
);

const Achievements = () => {
  return (
    <>
      <Head>
        <title>Matthew Sebastian Kurniawan | Achievements</title>
        <meta
          name="description"
          content="Competition results and certifications in data science, AI and software engineering."
        />
      </Head>

      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Competitions & Certifications."
            className="mb-16 !text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 md:gap-y-16 lg:gap-8">
            <FeaturedAward
              img={hackathonImg}
              title="Informatics Festival Hackathon"
              place="3rd Place"
              event="Informatics Festival Hackathon"
              organizer="Padjadjaran University"
              year="2025"
              summary="Placed third in a hackathon run by Padjadjaran University, building and presenting a working solution under competition time constraints."
            />

            <li className="col-span-1 flex flex-col justify-center">
              <ul className="grid grid-cols-1 gap-8">
                <Award
                  place="National Finalist"
                  event="Data Slayer 3.0"
                  organizer="Telkom University — National Data Science Competition"
                  year="2025"
                />
                <Award
                  place="Finalist"
                  event="PMJ Mathematics Competition"
                  organizer="PMJ"
                  year="2021"
                />
                <Award
                  place="Participant"
                  event="BRAND UI Business Case Competition"
                  organizer="University of Indonesia"
                  year="2024"
                />
              </ul>
            </li>
          </ul>

          <h2 className="mt-32 mb-16 w-full text-center text-8xl font-bold md:mt-24 md:mb-12 md:text-6xl xs:text-4xl">
            Certifications
          </h2>

          <ul className="grid grid-cols-1 gap-16 md:gap-8">
            <Certification
              title="Global Consumer Intelligence (GCI) Course 2025"
              issuer="University of Tokyo — Online (Japan)"
              period="Sep 2025 – Dec 2025"
              summary="Data science course run by the Matsuo-Iwasawa Laboratory, Graduate School of Engineering, covering machine learning fundamentals, data analysis workflows and practical AI modeling. Passed the final assessment."
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Achievements;
