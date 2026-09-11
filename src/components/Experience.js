import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/75 xs:text-sm">
          {time} | {address}
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

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="AI Researcher — Internship"
            company="Indosat Ooredoo Hutchison"
            companyLink="https://www.indosatooredoohutchison.com/"
            time="Jun 2026 – Present"
            address="Jakarta, Indonesia"
            work={[
              "Fine-tuned Whisper large-v3 with LoRA (PEFT) on Indonesian call center audio, running a cumulative data-scaling experiment to quantify how transcript quality improves with data volume, then converted the merged model to CTranslate2 (faster-whisper) for production inference.",
              "Researched real-time speech-to-speech frameworks orchestrating STT, LLM and TTS, then extended the selected framework with a new STT backend written from scratch so models could be swapped through a single CLI flag.",
              "Replaced all three default components — none of which supported Indonesian — with a LoRA fine-tuned Whisper, a fine-tuned Qwen LLM and a voice-cloned TTS, running them as a real-time VAD-STT-LLM-TTS pipeline behind the OpenAI Realtime API at 0.504 s STT latency and under 2 s per full turn.",
              "Benchmarked MERaLiON, emotion2vec and SpeechBrain on 700 labeled clips, raising UAR from 0.822 to 0.868 by remapping output classes with no additional training — the project's largest gain.",
            ]}
          />

          <Details
            position="Software Developer — Freelance"
            company="Organic Steel Group"
            companyLink="#"
            time="Apr 2026 – Present"
            address="Remote"
            work={[
              "Built AI-assisted document processing (OCR) that extracts structured data from invoices and receipts — vendor, date, VAT breakdown and line-item detail — removing manual entry for these fields.",
              "Developed and maintained a cloud-based SaaS application end-to-end with Next.js, React, Node.js/NestJS, Prisma ORM and PostgreSQL, serving 30+ users.",
              "Delivered Stripe payment integration and multilingual support across 9 languages, and owned deployment and production maintenance on AWS (Elastic Beanstalk, RDS, S3, Amplify, CloudFront).",
            ]}
          />

          <Details
            position="Developer — Internship"
            company="Asa Kreasi Interasia"
            companyLink="#"
            time="Jan 2026 – Apr 2026"
            address="Indonesia"
            work={[
              "Contributed to a web-based ERP system using Java Spring Boot, implementing application features and maintaining system functionality against project requirements.",
              "Translated user and business requirements into technical implementations while collaborating with the team to deliver development tasks on schedule.",
            ]}
          />

          <Details
            position="Data Analyst — Internship"
            company="Astra Honda Motor"
            companyLink="https://www.astra-honda.com/"
            time="Aug 2025 – Sep 2025"
            address="Jakarta, Indonesia"
            work={[
              "Built Python notebook workflows to compute sampling ratios and select transactions from Excel reports containing 1,000+ line items, replacing a manual review that took auditors a full working day per report.",
              "Automated Excel report generation classifying sampled and non-sampled transactions, producing audit-ready output consistently and removing manual formatting work.",
            ]}
          />

          <Details
            position="Practicum Assistant"
            company="Computational Thinking Lab, ITB"
            companyLink="https://www.itb.ac.id/"
            time="Oct 2024 – Dec 2024"
            address="Bandung, Indonesia"
            work={[
              "Assisted and supervised 79 students during Python programming practicum sessions, and evaluated coding assignments on correctness and code readability.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
