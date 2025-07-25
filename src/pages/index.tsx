import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Header from "../components/Layout/Header/Header";
import FeatureSection from "../components/FeatureSection/FeatureSection";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Header />
    // <header className={clsx("hero hero--primary", styles.heroBanner)}>
    //   <div className="container">
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro"
    //       >
    //         React-Forminate Tutorial - 5min ⏱️
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="page-home">
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="The headless form builder that transforms JSON schemas into production-ready React forms with zero boilerplate."
      >
        <HomepageHeader />
        {/* <main>
        <HomepageFeatures />
        <FeatureSection />
      </main> */}
      </Layout>
    </div>
  );
}
