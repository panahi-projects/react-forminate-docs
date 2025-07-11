# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```
react-forminate-docs
├─ .env
├─ blog
│  ├─ 2019-05-28-first-blog-post.md
│  ├─ 2019-05-29-long-blog-post.md
│  ├─ 2021-08-01-mdx-blog-post.mdx
│  ├─ 2021-08-26-welcome
│  │  ├─ docusaurus-plushie-banner.jpeg
│  │  └─ index.md
│  ├─ authors.yml
│  └─ tags.yml
├─ docs
│  ├─ advanced-features
│  │  ├─ custom-submit.md
│  │  ├─ dynamic-options.mdx
│  │  ├─ field-dependencies.md
│  │  ├─ pagination-support.md
│  │  ├─ query-params.md
│  │  ├─ skeleton-loading.md
│  │  └─ _category_.json
│  ├─ api-props
│  │  ├─ using-with-nextjs.mdx
│  │  ├─ vite-react-setup.md
│  │  └─ _category_.json
│  ├─ built-in-Fields
│  │  ├─ checkbox-field.mdx
│  │  ├─ custom-field.mdx
│  │  ├─ datepicker-field.mdx
│  │  ├─ gridview-field.mdx
│  │  ├─ input-field.mdx
│  │  ├─ radio-field.mdx
│  │  ├─ select-field.mdx
│  │  ├─ tutorial-gridview-field
│  │  │  ├─ advanced-usage.md
│  │  │  ├─ pagination.md
│  │  │  ├─ props.md
│  │  │  ├─ usage.mdx
│  │  │  └─ _category_.json
│  │  └─ _category_.json
│  ├─ core-concepts
│  │  ├─ field-components.md
│  │  ├─ formprovider-useForm.mdx
│  │  ├─ validation-system.md
│  │  └─ _category_.json
│  ├─ customization
│  │  ├─ adding-custom-field.md
│  │  ├─ custom-themes-styling.mdx
│  │  ├─ overriding-components.md
│  │  └─ _category_.json
│  ├─ deployment
│  │  ├─ using-with-nextjs.mdx
│  │  ├─ vite-react-setup.md
│  │  └─ _category_.json
│  ├─ faq.md
│  ├─ getting-started
│  │  ├─ basic-usage.md
│  │  ├─ installation.mdx
│  │  ├─ playground.md
│  │  └─ _category_.json
│  ├─ intro.mdx
│  ├─ introduction
│  │  ├─ key-benefits.mdx
│  │  ├─ what.mdx
│  │  ├─ when.mdx
│  │  └─ _category_.json
│  └─ typescript-support
│     ├─ extending-interfaces.md
│     ├─ schema-type-definitions.mdx
│     └─ _category_.json
├─ docusaurus.config.ts
├─ package-lock.json
├─ package.json
├─ plugins
│  └─ rawLoaderPlugin.ts
├─ README.md
├─ sidebars.ts
├─ src
│  ├─ components
│  │  ├─ ComparisonTable
│  │  │  ├─ ComparisonTable.module.css
│  │  │  └─ ComparisonTable.tsx
│  │  ├─ ConsoleDrawer.tsx
│  │  ├─ Examples
│  │  │  ├─ Ex1
│  │  │  │  ├─ BasicStructure.playground.tsx
│  │  │  │  └─ BasicStructure.tsx
│  │  │  └─ index.ts
│  │  ├─ FeatureCard
│  │  │  ├─ FeatureCard.module.css
│  │  │  └─ FeatureCard.tsx
│  │  ├─ FeatureSection
│  │  │  ├─ FeatureSection.module.css
│  │  │  └─ FeatureSection.tsx
│  │  ├─ HomepageFeatures
│  │  │  ├─ index.tsx
│  │  │  └─ styles.module.css
│  │  ├─ Landing
│  │  ├─ Layout
│  │  │  ├─ Footer
│  │  │  │  ├─ Footer.module.css
│  │  │  │  └─ FooterSection.tsx
│  │  │  └─ Header
│  │  │     ├─ Header.module.css
│  │  │     └─ Header.tsx
│  │  ├─ MyButton.tsx
│  │  ├─ Playground.tsx
│  │  ├─ PlaygroundStyledComp.ts
│  │  ├─ ui
│  │  │  └─ Button
│  │  │     ├─ Button.module.css
│  │  │     └─ Button.tsx
│  │  └─ UseCaseCards
│  │     ├─ UseCaseCards.module.css
│  │     └─ UseCaseCards.tsx
│  ├─ css
│  │  └─ custom.css
│  ├─ pages
│  │  ├─ index.module.css
│  │  ├─ index.tsx
│  │  └─ markdown-page.md
│  └─ theme
│     ├─ Footer
│     │  ├─ Copyright
│     │  │  └─ index.tsx
│     │  ├─ index.module.css
│     │  ├─ index.tsx
│     │  ├─ Layout
│     │  │  └─ index.tsx
│     │  ├─ LinkItem
│     │  │  └─ index.tsx
│     │  ├─ Links
│     │  │  ├─ index.tsx
│     │  │  ├─ MultiColumn
│     │  │  │  └─ index.tsx
│     │  │  └─ Simple
│     │  │     └─ index.tsx
│     │  └─ Logo
│     │     ├─ index.tsx
│     │     └─ styles.module.css
│     ├─ Layout
│     │  └─ index.tsx
│     └─ Navbar
│        ├─ ColorModeToggle
│        │  ├─ index.tsx
│        │  └─ styles.module.css
│        ├─ Content
│        │  ├─ index.tsx
│        │  └─ styles.module.css
│        ├─ index.tsx
│        ├─ Layout
│        │  ├─ index.tsx
│        │  └─ styles.module.css
│        ├─ Logo
│        │  └─ index.tsx
│        ├─ MobileSidebar
│        │  ├─ Header
│        │  │  └─ index.tsx
│        │  ├─ index.tsx
│        │  ├─ Layout
│        │  │  └─ index.tsx
│        │  ├─ PrimaryMenu
│        │  │  └─ index.tsx
│        │  ├─ SecondaryMenu
│        │  │  └─ index.tsx
│        │  └─ Toggle
│        │     └─ index.tsx
│        └─ Search
│           ├─ index.tsx
│           └─ styles.module.css
├─ static
│  ├─ .nojekyll
│  └─ img
│     ├─ benefits-diagram.svg
│     ├─ docusaurus-social-card.jpg
│     ├─ docusaurus.png
│     ├─ favicon.ico
│     ├─ logo.svg
│     ├─ React-Forminate-Logo-256x256-bg-transparent.webp
│     ├─ React-Forminate-Logo-800x800-bg-transparent.webp
│     ├─ react-forminate-under-the-hood.jpg
│     ├─ undraw_docusaurus_mountain.svg
│     ├─ undraw_docusaurus_react.svg
│     └─ undraw_docusaurus_tree.svg
├─ tsconfig.json
└─ types
   └─ declarations.d.ts

```