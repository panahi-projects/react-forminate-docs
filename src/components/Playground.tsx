import copy from "copy-to-clipboard";
import { AnimatePresence, motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css"; // dark
import React, { useEffect, useRef, useState } from "react";

import { useColorMode } from "@docusaurus/theme-common";
import ConsoleDrawer from "./ConsoleDrawer";
import {
  Button,
  CodeBox,
  CodeWrapper,
  Container,
  CopiedBubble,
  PreviewBox,
  Tab,
  Tabs,
  Toolbar,
} from "./PlaygroundStyledComp";

interface PlaygroundProps {
  Component: React.ComponentType;
  code: string;
  language: string;
  showConsole?: boolean;
  defaultTab?: "preview" | "code";
}

const Playground: React.FC<PlaygroundProps> = ({
  Component,
  code,
  language,
  showConsole = false,
  defaultTab = "preview",
}) => {
  const codeRef = useRef<HTMLElement>(null);

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [tab, setTab] = useState<"preview" | "code">(defaultTab);
  const [copied, setCopied] = useState(false);

  // Initial highlight when code changes (optional)
  useEffect(() => {
    if (codeRef.current) Prism.highlightElement(codeRef.current);
  }, [code, language]);

  // Re-highlight when "code" tab becomes active
  useEffect(() => {
    if (tab === "code") {
      setTimeout(() => Prism.highlightElement(codeRef.current), 300);
    }
  }, [tab]);

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Container isDark={isDark}>
      <Tabs isDark={isDark}>
        <Tab
          active={tab === "preview"}
          onClick={() => setTab("preview")}
          isDark={isDark}
        >
          Preview
        </Tab>
        <Tab
          active={tab === "code"}
          onClick={() => setTab("code")}
          isDark={isDark}
        >
          Code
        </Tab>
      </Tabs>

      <AnimatePresence mode="wait">
        {tab === "preview" && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25 }}
          >
            <PreviewBox isDark={isDark}>
              <Component />
            </PreviewBox>
            {showConsole && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ConsoleDrawer />
              </motion.div>
            )}
          </motion.div>
        )}

        {tab === "code" && (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
          >
            <CodeWrapper>
              {copied && <CopiedBubble>Copied!</CopiedBubble>}
              <Toolbar>
                <Button onClick={handleCopy} isDark={isDark}>
                  <span role="img" aria-label="copy">
                    📋
                  </span>{" "}
                  Copy code
                </Button>
              </Toolbar>
              <CodeBox>
                <div>
                  <pre className={`language-${language}`}>
                    <code
                      ref={codeRef}
                      className={`language-${language}`}
                      suppressHydrationWarning
                    >
                      {code}
                    </code>
                  </pre>
                </div>
              </CodeBox>
            </CodeWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Playground;
