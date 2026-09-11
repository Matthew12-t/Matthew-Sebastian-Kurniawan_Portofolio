import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light dark:bg-dark">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const pref = localStorage.getItem('theme');
                const dark = pref
                  ? pref === 'dark'
                  : window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (dark) document.documentElement.classList.add('dark');
              } catch (_) {}
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
