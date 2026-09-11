import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Organizations from "@/components/Organizations";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/matthew-about.webp";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
    return unsubscribe;
  }, [springValue, value]);

  return <span ref={ref} />;
};

const Stat = ({ value, suffix = "+", label }) => (
  <div className="flex flex-col items-end justify-center xl:items-center">
    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
      <AnimatedNumbers value={value} />
      {suffix}
    </span>
    <h2
      className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
      xl:text-center md:text-lg sm:text-base xs:text-sm"
    >
      {label}
    </h2>
  </div>
);

const About = () => {
  return (
    <>
      <Head>
        <title>Matthew Sebastian Kurniawan | About</title>
        <meta
          name="description"
          content="AI Engineer and Software Engineer working on Indonesian speech AI, machine learning and full-stack web applications."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="From Experiment To Production."
            className="mb-16 !text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Matthew, a final-year Information Systems
                &amp; Technology student at Bandung Institute of Technology with
                a minor in Data Science and Artificial Intelligence. I care
                about the part of AI work that most experiments never reach:
                getting a model to run reliably, fast enough, for real users.
              </p>
              <p className="my-4 font-medium">
                Right now I research Indonesian speech AI at Indosat Ooredoo
                Hutchison, where I fine-tuned Whisper large-v3 with LoRA on call
                center audio and rebuilt a real-time speech-to-speech pipeline
                so every component actually supports Indonesian, reaching
                0.504 s STT latency and under 2 s per conversational turn.
              </p>
              <p className="font-medium">
                Alongside the research, I ship software. I built and maintain a
                cloud SaaS product end-to-end on Next.js, NestJS and AWS,
                including AI-assisted OCR for invoices, Stripe payments and
                support for nine languages. Strong foundations in algorithms,
                data structures and OOP are what let me move between both worlds
                comfortably.
              </p>
            </div>

            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:border-light dark:bg-dark
              xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Matthew Sebastian Kurniawan"
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            <div
              className="col-span-2 flex flex-col items-end justify-between
              xl:col-span-8 xl:flex-row xl:items-center md:order-3"
            >
              <Stat value={5} label="Professional roles" />
              <Stat value={30} label="SaaS users served" />
              <Stat value={79} label="Students mentored" suffix="" />
              <Stat value={4} label="National competitions" suffix="" />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
          <Organizations />
        </Layout>
      </main>
    </>
  );
};

export default About;
