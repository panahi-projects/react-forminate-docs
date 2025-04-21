import { useColorMode } from "@docusaurus/theme-common";
import copy from "copy-to-clipboard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import {
  Button,
  CodeBox,
  CodeWrapper,
  ConsoleContainer,
  Container,
  CopiedBubble,
  ErrorMessage,
  LiveEditorStyled,
  PreviewBox,
  Tab,
  Tabs,
  Toolbar,
} from "./LiveCodeBlockStyledComponents";
import ConsoleDrawer from "./ConsoleDrawer";

export const LiveCodeBlock = ({ code, scope = {}, showConsole = false }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Patch console.log inside scope (optional, replace with your own logic)
  const scopedWithConsole = {
    ...scope,
    console: {
      ...console,
      log: (...args: any[]) => {
        const formatted = args
          .map((arg) => {
            try {
              return typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg);
            } catch {
              return String(arg);
            }
          })
          .join(" ");
        setLogs((prev) => [...prev, formatted]);
        // Still allow native logging
        console.log(...args);
      },
    },
  };

  return (
    <LiveProvider code={code} scope={scope} theme={undefined}>
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
                <LivePreview />
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
                  <Button onClick={handleCopy}>
                    <span role="img" aria-label="copy">
                      📋
                    </span>{" "}
                    Copy code
                  </Button>
                </Toolbar>
                <CodeBox>
                  <LiveEditorStyled />
                </CodeBox>
              </CodeWrapper>
            </motion.div>
          )}
        </AnimatePresence>

        <ErrorMessage>
          <LiveError />
        </ErrorMessage>
      </Container>
    </LiveProvider>
  );
};
