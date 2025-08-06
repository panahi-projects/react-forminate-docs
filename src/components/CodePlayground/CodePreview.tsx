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
          <div className="relative">
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
              <Highlight code={code} language="tsx" theme={themes.vsDark}>
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
                    }`}
                    style={{ ...style }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className={styles.lineNumber}>{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
            <CopyButton content={code} />
          </div>
        )}
      </div>
    </div>
  );
}
