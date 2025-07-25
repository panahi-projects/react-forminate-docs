import React, { type ReactNode } from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import styles from "./index.module.css";
import FooterSection from "@site/src/components/Layout/Footer/FooterSection";

function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return (
    <div></div>
    // <FooterSection />
    // <FooterLayout
    //   style={style}
    //   links={links && links.length > 0 && <FooterLinks links={links} />}
    //   logo={logo && <FooterLogo logo={logo} />}
    //   copyright={copyright && <FooterCopyright copyright={copyright} />}
    // />
  );
}

export default React.memo(Footer);
