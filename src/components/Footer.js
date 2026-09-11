import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
      dark:text-light dark:border-light sm:text-base"
    >
      <div className="py-8 px-32 flex items-center justify-between lg:flex-col lg:py-6 lg:px-16 md:px-12 sm:px-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built with
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://github.com/Matthew12-t"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Matthew Sebastian Kurniawan
          </Link>
        </div>
        <Link
          href="mailto:matthewsebastian1107@gmail.com"
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
