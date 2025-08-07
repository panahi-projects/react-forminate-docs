// Updated CodePreview component with gradient overlay and improved button styling
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";
import ConsoleViewer from "./ConsoleDrawer";
import CopyButton from "./CopyButton";
import styles from "./CodePreview.module.css";

interface CodePreviewProps {
  code: string;
  component: React.ReactNode;
  title?: string;
  focusedTitle?: string;
  maxHeight?: string;
  defaultTab?: "code" | "preview";
}

export function CodePreview({
  code,
  component,
  title,
  focusedTitle,
  maxHeight = "32rem",
  defaultTab = "preview",
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"code" | "preview">(defaultTab);
  const [isClient, setIsClient] = useState(false);
  const [wrapCode, setWrapCode] = useState(true);
  const [lineCount, setLineCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Parse the code for truncation markers
  const hasTruncateMarkers =
    code.includes("<!-- truncate-start -->") &&
    code.includes("<!-- truncate-end -->");

  // Remove the truncation markers from the final displayed code
  const cleanCode = code
    .replace(/<!-- truncate-start -->/g, "")
    .replace(/<!-- truncate-end -->/g, "");

  // Get display code based on expanded state
  const getDisplayCode = () => {
    if (!hasTruncateMarkers || isExpanded) {
      return cleanCode;
    }

    const startIndex = code.indexOf("<!-- truncate-start -->");
    const endIndex =
      code.indexOf("<!-- truncate-end -->") + "<!-- truncate-end -->".length;

    const beforeTruncate = code.substring(0, startIndex);
    const truncateContent = code.substring(
      startIndex + "<!-- truncate-start -->".length,
      endIndex - "<!-- truncate-end -->".length
    );
    const afterTruncate = code.substring(endIndex);

    return `
${beforeTruncate.split("\n").slice(0, 2).join("\n")}
// ... [collapsed start code] ...
${truncateContent}
// ... [collapsed end code] ...
${afterTruncate.split("\n").slice(-2).join("\n")}
`;
  };

  const displayCode = getDisplayCode();

  useEffect(() => {
    setIsClient(true);
    setLineCount(code.split("\n").length);
  }, [code]);

  return (
    <div className={styles.container}>
      {title && (
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>
            {title}
            {focusedTitle && (
              <span className={styles.focusedTitle}>{focusedTitle}</span>
            )}
          </h3>
        </div>
      )}

      <div className={styles.tabContainer}>
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "preview" ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "code" ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
        </div>
        <div className={styles.lineCount}>
          {lineCount} {lineCount === 1 ? "line" : "lines"}
        </div>
      </div>

      <div className="relative">
        {activeTab === "preview" ? (
          <div>
            <div className={styles.previewContainer}>
              {isClient ? component : <div>Loading preview...</div>}
            </div>
            <ConsoleViewer />
          </div>
        ) : (
          <div className={styles.codeWrapper}>
            <div className={styles.codeHeader}>
              <div className={styles.codeHeaderText}>TSX</div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWrapCode(!wrapCode)}
                  className={styles.wrapButton}
                >
                  {wrapCode ? (
                    <>
                      <span>Unwrap</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 12h16m-7-7l7 7-7 7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Wrap</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 12h16m-7-7l7 7-7 7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className={styles.codeContainer} style={{ maxHeight }}>
              <div className={styles.codeContent}>
                <Highlight
                  code={displayCode}
                  language="tsx"
                  theme={themes.vsDark}
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre
                      className={`${className} ${styles.pre} ${
                        wrapCode ? styles.wrap : styles.noWrap
                      } ${
                        hasTruncateMarkers && !isExpanded
                          ? styles.truncated
                          : ""
                      }`}
                      style={{ ...style }}
                    >
                      {tokens.map((line, i) => {
                        const lineProps = getLineProps({ line });
                        // Add special classes for truncated sections
                        if (hasTruncateMarkers && !isExpanded) {
                          const lineText = line.map((t) => t.content).join("");
                          if (lineText.includes("[collapsed start code]")) {
                            lineProps.className += ` ${styles.collapsedStart}`;
                          } else if (
                            lineText.includes("[collapsed end code]")
                          ) {
                            lineProps.className += ` ${styles.collapsedEnd}`;
                          } else if (
                            code.includes(lineText.trim()) &&
                            lineText.trim() !== ""
                          ) {
                            lineProps.className += ` ${styles.highlightedCode}`;
                          }
                        }
                        return (
                          <div key={i} {...lineProps}>
                            <span className={styles.lineNumber}>{i + 1}</span>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </div>
                        );
                      })}
                    </pre>
                  )}
                </Highlight>
              </div>
              {hasTruncateMarkers && !isExpanded && (
                <div className={styles.gradientOverlay} />
              )}
            </div>
            <div className={styles.copyButton}>
              <CopyButton content={code} />
            </div>
          </div>
        )}
      </div>
      {hasTruncateMarkers && activeTab === "code" && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.expandButton}
        >
          {isExpanded ? "Collapse Code" : "Expand Code"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={styles.expandIcon}
          >
            <path
              d={isExpanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
