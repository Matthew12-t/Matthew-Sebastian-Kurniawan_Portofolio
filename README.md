# Matthew Sebastian Kurniawan — Portofolio

Personal portfolio website built with **Next.js**, **Tailwind CSS** and **Framer Motion**.

Final-year Information Systems & Technology student at Bandung Institute of Technology,
minor in Data Science & Artificial Intelligence. AI Engineering, AI Research and
Software Engineering.

## Pages

| Route           | Content                                                              |
| --------------- | -------------------------------------------------------------------- |
| `/`             | Hero, short introduction, downloadable resume                        |
| `/about`        | Biography, animated stats, skills, experience and education timelines |
| `/projects`     | Featured work and university projects                                 |
| `/achievements` | Competition results and certifications                                |

## Tech stack

- [Next.js 15](https://nextjs.org/) (Pages Router)
- [Tailwind CSS 3](https://tailwindcss.com/) with a class-based dark mode
- [Framer Motion](https://www.framer.com/motion/) for page transitions and scroll animations
- `next/font` (Montserrat) and `next/image` for asset optimization

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── components/   # NavBar, Footer, Layout, Skills, Experience, Education, Icons, ...
├── hooks/        # useThemeSwitcher (dark mode + localStorage)
├── pages/        # index, about, projects, achievements
└── styles/       # Tailwind entry point
public/
├── images/       # profile, project covers, achievements
└── *.pdf         # resume
```

## Editing the content

- **Projects** — edit the `<FeaturedProject>` / `<Project>` entries in `src/pages/projects.js`
- **Experience & education** — `src/components/Experience.js` and `src/components/Education.js`
- **Skills** — `src/components/Skills.js`
- **Achievements** — `src/pages/achievements.js`
- **Contact links** — the `socials` array in `src/components/NavBar.js`

## Contact

- Email: matthewsebastian1107@gmail.com
- LinkedIn: [matthew-sebastian-kurniawan](https://www.linkedin.com/in/matthew-sebastian-kurniawan)
- GitHub: [Matthew12-t](https://github.com/Matthew12-t)

## Credits

Layout and animation patterns are based on the
[Next.js Developer Portfolio](https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code)
starter by [CodeBucks](https://github.com/codebucks27). All content, copy and assets are my own.
