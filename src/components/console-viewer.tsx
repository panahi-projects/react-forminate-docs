import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type LogEntry = React.ReactNode;

const Wrapper = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

const Label = styled.div`
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  background-color: #0d0d0d;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #9ca3af;
`;

const Terminal = styled.div`
  background-color: #0d0d0d;
  border: 1px solid #374151;
  border-radius: 0.5rem;
  padding: 1rem 0;
  font-family: monospace;
  font-size: 0.875rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const TerminalBody = styled.div`
  height: 10rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  scrollbar-width: thin;
  scrollbar-color: #4b5563 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4b5563;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const InlineBlock = styled.span`
  display: inline-block;
  margin-bottom: 0.25rem;
`;

const StyledSpan = styled.span<{ color?: string; italic?: boolean }>`
  color: ${({ color }) => color || "inherit"};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

const ConsoleViewer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const formatValue = (value: any): React.ReactNode => {
    if (typeof value === "string") {
      return <StyledSpan color="#facc15">"{value}"</StyledSpan>; // yellow
    }
    if (typeof value === "number") {
      return <StyledSpan color="#f472b6">{value}</StyledSpan>; // pink
    }
    if (typeof value === "boolean") {
      return (
        <StyledSpan color={value ? "#60a5fa" : "#f87171"}>
          {String(value)}
        </StyledSpan>
      ); // blue or red
    }
    if (value === null) {
      return (
        <StyledSpan color="#9ca3af" italic>
          null
        </StyledSpan>
      );
    }
    if (typeof value === "undefined") {
      return (
        <StyledSpan color="#9ca3af" italic>
          undefined
        </StyledSpan>
      );
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
            <InlineBlock key={key}>
              <StyledSpan color="#34d399">{key}</StyledSpan>: {formatValue(val)}
              {index < arr.length - 1 && ", "}
            </InlineBlock>
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
    <Wrapper>
      <Label>console.log</Label>
      <Terminal>
        <TerminalBody ref={scrollRef}>{logs}</TerminalBody>
      </Terminal>
    </Wrapper>
  );
};

export default ConsoleViewer;
