"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ConsoleViewer.module.css";

type LogEntry = React.ReactNode;

const ConsoleViewer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const formatValue = (value: any): React.ReactNode => {
    if (typeof value === "string") {
      return <span className={styles.string}>"{value}"</span>;
    }
    if (typeof value === "number") {
      return <span className={styles.number}>{value}</span>;
    }
    if (typeof value === "boolean") {
      return (
        <span
          className={value === true ? styles.booleanTrue : styles.booleanFalse}
        >
          {String(value)}
        </span>
      );
    }
    if (value === null) {
      return <span className={styles.null}>null</span>;
    }
    if (typeof value === "undefined") {
      return <span className={styles.undefined}>undefined</span>;
    }
    if (Array.isArray(value)) {
      return (
        <span>
          [{" "}
          {value.map((item, i) => (
            <span key={i}>
              {formatValue(item)}
              {i < value.length - 1 && ", "}
            </span>
          ))}{" "}
          ]
        </span>
      );
    }
    if (typeof value === "object") {
      return (
        <span>
          {"{ "}
          {Object.entries(value).map(([key, val], index, arr) => (
            <span key={key} className="mb-4 inline-block">
              <span className={styles.objectKey}>{key}</span>:{" "}
              {formatValue(val)}
              {index < arr.length - 1 && ", "}
            </span>
          ))}
          {" }"}
        </span>
      );
    }
    return <span>{String(value)}</span>;
  };

  useEffect(() => {
    const originalLog = console.log;

    console.log = (...args: any[]) => {
      const formatted = args.map((arg, index) => (
        <React.Fragment key={index}>{formatValue(arg)} </React.Fragment>
      ));
      setLogs((prev) => [...prev, <div key={prev.length}>{formatted}</div>]);
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
    <div className={styles.container}>
      <div className={styles.terminalLabel}>console.log</div>
      <div className={styles.terminalBody}>
        <div ref={scrollRef} className={styles.scrollContainer}>
          {logs}
        </div>
      </div>
    </div>
  );
};

export default ConsoleViewer;
