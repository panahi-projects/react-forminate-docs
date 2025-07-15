import React, { type ReactNode } from "react";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <Layout {...props} />
      {/* Clicky Analytics */}
      <a
        title="Privacy-friendly Web Analytics"
        href="https://clicky.com/101488604"
      >
        <img
          alt="Clicky"
          src="//static.getclicky.com/media/links/badge.gif"
          style={{ border: "none" }}
        />
      </a>
      <script
        async
        data-id="101488604"
        src="//static.getclicky.com/js"
      ></script>
    </>
  );
}
