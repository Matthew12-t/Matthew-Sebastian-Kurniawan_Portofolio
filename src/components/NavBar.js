import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Logo from "./Logo";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  WhatsAppIcon,
} from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const socials = [
  {
    href: "https://github.com/Matthew12-t",
    label: "GitHub profile",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/matthew-sebastian-kurniawan",
    label: "LinkedIn profile",
    Icon: LinkedInIcon,
  },
  {
    href: "https://wa.me/6285811603140",
    label: "Chat on WhatsApp",
    Icon: WhatsAppIcon,
  },
  {
    href: "mailto:matthewsebastian1107@gmail.com",
    label: "Send an email",
    Icon: MailIcon,
  },
];

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/achievements", title: "Achievements" },
];

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const ThemeButton = () => (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`ml-3 flex items-center justify-center rounded-full p-1 w-8 h-8 ${
        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      aria-label="Toggle dark mode"
    >
      {mode === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          {navLinks.map(({ href, title }) => (
            <CustomLink
              key={href}
              href={href}
              title={title}
              className="mr-4"
            />
          ))}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          {socials.map(({ href, label, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
              aria-label={label}
            >
              <Icon />
            </motion.a>
          ))}
          <ThemeButton />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            {navLinks.map(({ href, title }) => (
              <CustomMobileLink
                key={href}
                href={href}
                title={title}
                toggle={handleClick}
              />
            ))}
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-8">
            {socials.map(({ href, label, Icon }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 bg-light text-dark dark:bg-dark dark:text-light rounded-full p-1"
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
            <ThemeButton />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
