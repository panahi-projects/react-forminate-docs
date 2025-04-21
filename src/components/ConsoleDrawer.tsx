import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type LogEntry = React.ReactNode;

export const ConsoleContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-family: monospace;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  border-top: 1px solid rgba(16, 185, 129, 0.4);
  white-space: pre-wrap;
  word-break: break-word;
`;

const ConsoleDrawer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalLog = console.log;

    console.log = (...args: any[]) => {
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
      originalLog(...args);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <ConsoleContainer ref={scrollRef}>
      {logs.map((log, i) => (
        <div key={i}>{log}</div>
      ))}
    </ConsoleContainer>
  );
};

export default ConsoleDrawer;
