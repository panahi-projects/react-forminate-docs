import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import styled from "styled-components";
import { useColorMode } from "@docusaurus/theme-common";
import ConsoleViewer from "./console-viewer"; // make sure the path is correct

type LiveCodeBlockProps = {
  code: string;
  scope?: Record<string, any>;
  noInline?: boolean;
  showLogs?: boolean; // 👈 New prop
};

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
`;

const PreviewBox = styled.div<{ isDark: boolean }>`
  background: ${({ isDark }) => (isDark ? "#1e1e1e" : "#f9fafb")};
  padding: 1.5rem;
  transition: background 0.3s ease;
`;

const CodeWrapper = styled.div`
  position: relative;
`;

const CodeBox = styled.div<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? "none" : "200px")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #2d2d2d;
  font-family: "Fira Code", monospace;
  position: relative;
`;

const FadeOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to top, #2d2d2d, transparent);
  pointer-events: none;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a1a;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #ccc;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #64b5f6;
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LiveEditorStyled = styled(LiveEditor)`
  padding: 1rem;
  font-size: 0.875rem;
`;

const ErrorBox = styled(LiveError)`
  color: red;
  padding: 0.75rem;
  background: #ffeeee;
  font-size: 0.875rem;
`;

const CopiedBubble = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #4ade80;
  color: #fff;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  opacity: 0;
  animation: fadeInOut 2s forwards;
  pointer-events: none;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    10% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

const LogSectionWrapper = styled.div`
  margin-top: 2rem;
`;

const LiveCodeBlock: React.FC<LiveCodeBlockProps> = ({
  code,
  scope = {},
  noInline = true,
  showLogs = false,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LiveProvider
      code={code}
      scope={scope}
      noInline={noInline}
      theme={themes.dracula}
    >
      <Container>
        <PreviewBox isDark={isDark}>
          <LivePreview />
        </PreviewBox>

        <CodeWrapper>
          {copied && <CopiedBubble>Copied!</CopiedBubble>}

          <Toolbar>
            <Button onClick={() => setExpanded((prev) => !prev)}>
              {expanded ? "Show less" : "Show more"}
            </Button>
            <Button onClick={handleCopy}>
              <span role="img" aria-label="copy">
                📋
              </span>{" "}
              Copy
            </Button>
          </Toolbar>

          <CodeBox expanded={expanded}>
            <LiveEditorStyled />
            {!expanded && <FadeOverlay />}
          </CodeBox>
        </CodeWrapper>

        <ErrorBox />

        {showLogs && (
          <LogSectionWrapper>
            <ConsoleViewer />
          </LogSectionWrapper>
        )}
      </Container>
    </LiveProvider>
  );
};

export default LiveCodeBlock;
