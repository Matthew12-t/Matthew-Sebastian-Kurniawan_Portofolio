import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/Icons";
import profilePic from "../../public/images/profile/matthew-hero.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Sebastian Kurniawan | AI Engineer</title>
        <meta
          name="description"
          content="Final-year Information Systems and Technology student at Bandung Institute of Technology, focused on taking AI systems from experiment to production."
        />
      </Head>

      <TransitionEffect />

      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Matthew Sebastian Kurniawan"
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning AI Research Into Systems That Ship."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I&apos;m a final-year Information Systems &amp; Technology
                student at Bandung Institute of Technology with a minor in Data
                Science and Artificial Intelligence. I build speech and language
                systems that run in production, and the web applications
                around them. Explore my latest projects below.
              </p>

              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/Matthew-Sebastian-Kurniawan-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark
                  p-2.5 px-6 text-lg font-semibold text-light
                  hover:border-dark hover:bg-light hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                  download
                >
                  Resume <LinkArrow className="ml-1 w-6" />
                </Link>

                <Link
                  href="mailto:matthewsebastian1107@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </article>
    </>
  );
}
