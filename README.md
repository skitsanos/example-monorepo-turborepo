## Preface

The problem of managing large amounts of code in a uniform manner has been around for a while and has been exacerbated by the explosion of web development, which relies on a diversity of open source packages and a certain swiftness of delivery.

The purpose behind this research was to identify a monorepo framework that allows keeping multiple projects at one repository with a minimal learning curve and further maintenance with keeping in mind small to the middle-size codebase of up to 3-5 projects/application blocks. 

For those ones coming from CVS systems like Subversion (SVN), probably, monorepo will be something very easy to deal with, with the only difference - dependency management this time is not done 'per-project', it is monorepo engine that does most of the dirty job. So, in the case of npm packages, some of the common ones will be installed at monorepo's _node_modules_ in case they are used in multiple applications of monorepo, and some will be in the repos of these applications.

With multiple repositories, we typically either have one project per repository, or an umbrella of related projects per repo, but that forces you to define what a “project” is for your particular team or company, and it sometimes forces you to split and merge repos for reasons that are pure overhead. For example, having to split a project because it's too big or has too much history for your VCS is not optimal.

With a monorepo, projects can be organized and grouped together in whatever way you find to be most logically consistent, and not just because your version control system forces you to organize things in a particular way. Using a single repo also reduces the overhead of managing dependencies, but it could create another headache within CI/CD and when there is a single development team per project or application, - for example dedicated team for the backend and another one for the front-end.

In the single-team service ownership model, the team owns all changes to the source code for that component of the project. This doesn’t mean only people on this team are allowed to make changes to the source code for that component—rather, it means all changes made to the component are the responsibility of the owning team.

The owning team must have the right to review and approve all changes. Because they are ultimately responsible for the component, they must be able to manage the code for the component.

It can be also an issue if your project requires different levels of security clearances on various application blocks. In my practice, especially working with government projects, it was exactly the case., - while dashboards that ran on simulated data were developed by the team with lower security clearance, APIs and developments done against the sensitive data were done by the team with higher clearance.

Plus, the larger the repository, the harder it is for each individual engineer to manage the repository while trying to develop code for inclusion in the repository. The more people you have working on a single repository, and the more code changes that repository sees, the more maintenance each individual using that repository must deal with.

But, since we took into consideration 'one team only' and the number of application blocks is rather small, - in my case it is UI components, Dashboard that uses those components, and the backend, monorepo would do just fine here, and it comes with these 'batteries included:

- You can easily make cross-cutting code changes across multiple applications (eg `/frontend` and `/backend`) in one atomic commit

- You can easily search across all projects

- Single source of truth

  for many environment concerns you will want to standardize across your company, for example:

  - dependency management (important deps in one `package.json`)
  - code reuse of shared packages (e.g. `/design-system` or `/common-utils` or `/schema`)
  - configs (ESlint, TSconfig, etc)
  - tests (from unit to e2e)

- For library authors, it is also easier to publish packages with dependencies on each other.



## So, Turborepo

[Turborepo](https://www.youtube.com/watch?v=YX5yoApjI3M&t=225s) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

TurboRepo was started with 3 objectives:

- make a monorepo tool that utilizes as many of these advanced techniques as possible *with zero config*
- make it easy to *incrementally adopt* (eg when moving from Lerna)
- make sure that it *scales* (eg API design and architectural choices are flexible enough)



The basic principle of TurboRepo is to **never recompute work that has been done before**.

To do this, it generates a dependency graph from your build pipeline from a `turbo` config in package.json, executes each task in turn, and fingerprints the input/caches the output of each task.

When it is run a second time, if it finds work that matches a fingerprint, it restores from the cache and **replays the logs**.



## This repo

>  This repo is an example of how to use Turborepo, UI components bundled with Vite.js, and the Frontend app Done with Umi.js.

### How to use

Clone the repo

```shell
git clone git@github.com:skitsanos/example-monorepo-turborepo.git
```

Install dependencies

```shell
cd example-monorepo-turborepo/
yarn
```

Run the whole thing

```shell
yarn run dev
```

Please note - while developing, every change in the UI Components library will automatically update the frontend as well, without a need to restart it.

### References

- [What Is A Monorepo And Why You Should Care](https://www.youtube.com/watch?v=VvcJGjjEyKo)
- [Why TurboRepo Will Be The First Big Trend of 2022](https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj)
- [Is Turborepo overhyped?](https://tolgee.io/blog/turborepo-overhyped)
- [Monorepos are changing how teams build software](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software)
- [Migrating from Lerna to Turborepo](https://turborepo.org/docs/guides/migrate-from-lerna)
- [Turborepo vs Nx](https://nx.dev/guides/turbo-and-nx)