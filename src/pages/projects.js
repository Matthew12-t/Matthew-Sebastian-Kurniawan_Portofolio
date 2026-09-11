import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";

import speechAI from "../../public/images/projects/speech-ai-pipeline.png";
import docAI from "../../public/images/projects/doc-ai-saas.png";
import chemlab from "../../public/images/projects/chemlab.png";
import fraud from "../../public/images/projects/fraud-detection.png";
import spakbor from "../../public/images/projects/spakbor-hills.png";
import kaiDb from "../../public/images/projects/kai-database.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, stack }) => (
  <article
    className="relative flex w-full items-center justify-between rounded-br-2xl rounded-3xl
    border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
  >
    <div
      className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl
      bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
    />

    <Link
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
    >
      <FramerImage
        src={img}
        alt={title}
        className="h-auto w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
      />
    </Link>

    <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
      <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
        {type}
      </span>
      <Link
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="underline-offset-2 hover:underline"
      >
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
          {title}
        </h2>
      </Link>
      <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
        {summary}
      </p>
      <p className="my-2 text-sm font-medium text-dark/60 dark:text-light/60">
        {stack}
      </p>
      <div className="mt-2 flex items-center">
        {github ? (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10"
            aria-label={`${title} GitHub repository`}
          >
            <GithubIcon className="text-dark dark:text-light" />
          </Link>
        ) : null}
        <Link
          href={link}
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light
          dark:bg-light dark:text-dark sm:px-4 sm:text-base"
        >
          Visit Project
        </Link>
      </div>
    </div>
  </article>
);

const Project = ({ title, type, img, link, github, stack }) => (
  <article
    className="relative flex w-full flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4"
  >
    <div
      className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem]
      bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
    />

    <Link
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="w-full cursor-pointer overflow-hidden rounded-lg"
    >
      <FramerImage
        src={img}
        alt={title}
        className="h-auto w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>

    <div className="mt-4 flex w-full flex-col items-start justify-between">
      <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
        {type}
      </span>
      <Link
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="underline-offset-2 hover:underline"
      >
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>
      </Link>
      <p className="text-sm font-medium text-dark/60 dark:text-light/60">
        {stack}
      </p>

      <div className="mt-2 flex w-full items-center justify-between">
        <Link
          href={link}
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-lg font-medium underline md:text-base"
        >
          Visit
        </Link>
        {github ? (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 md:w-6"
            aria-label={`${title} GitHub repository`}
          >
            <GithubIcon className="text-dark dark:text-light" />
          </Link>
        ) : null}
      </div>
    </div>
  </article>
);

const GITHUB = "https://github.com/Matthew12-t";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Matthew Sebastian Kurniawan | Projects</title>
        <meta
          name="description"
          content="Speech AI pipelines, machine learning models built from scratch, and full-stack applications."
        />
      </Head>

      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Systems I Have Built."
            className="mb-16 !text-8xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project — Indosat Ooredoo Hutchison"
                title="Real-Time Indonesian Speech-to-Speech AI"
                img={speechAI}
                summary="A real-time VAD → STT → LLM → TTS pipeline behind the OpenAI Realtime API, rebuilt so every component supports Indonesian: a LoRA fine-tuned Whisper large-v3 for speech recognition, a fine-tuned Qwen LLM, and a voice-cloned TTS. Reached 0.504 s STT latency and under 2 s per full conversational turn on noisy call center audio."
                stack="PyTorch · HuggingFace · PEFT/LoRA · Whisper large-v3 · Qwen · CTranslate2 / faster-whisper · Silero VAD"
                link={GITHUB}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project — Organic Steel Group"
                title="AI-Assisted Document Processing SaaS"
                img={docAI}
                summary="A cloud-based SaaS product built end-to-end and serving 30+ users. Its OCR layer extracts structured data from invoices and receipts — vendor, date, VAT breakdown and line-item detail — removing manual entry. Ships with Stripe payments, nine-language support, and production deployment on AWS."
                stack="Next.js · React · Node.js/NestJS · Prisma ORM · PostgreSQL · Stripe · AWS (Elastic Beanstalk, RDS, S3, Amplify, CloudFront)"
                link={GITHUB}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                title="Fraud Detection From Scratch"
                img={fraud}
                stack="Python · NumPy · Pandas — 4th on the leaderboard, ROC-AUC 0.620"
                link={GITHUB}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile Application"
                title="ChemLab — Interactive Chemistry Learning"
                img={chemlab}
                stack="React Native · TypeScript · Supabase · Google OAuth"
                link={GITHUB}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Game Development"
                title="Spakbor Hills — RPG Farming Simulation"
                img={spakbor}
                stack="Java · OOP design · inventory, NPC interaction, in-game economy"
                link={GITHUB}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Database Design"
                title="KAI Ticketing & Train Operation Modeling"
                img={kaiDb}
                stack="MySQL · ERD modeling · normalization"
                link={GITHUB}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
