import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

import Header from "../components/Layout/Header/Header";

function HomepageHeader() {
  return <Header />;
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
