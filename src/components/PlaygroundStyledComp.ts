import styled from "styled-components";

export const Container = styled.div<{ isDark: boolean }>`
  font-family: "Fira Code", monospace;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${({ isDark }) => (isDark ? "#333" : "#e5e7eb")};
  background: ${({ isDark }) => (isDark ? "#1e1e1e" : "#fff")};
`;

export const Tabs = styled.div<{ isDark: boolean }>`
  display: flex;
  border-bottom: 1px solid
    ${({ isDark }: { isDark: boolean }) => (isDark ? "#333" : "#e5e7eb")};
`;

export const Tab = styled.button<{ active: boolean; isDark: boolean }>`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  color: ${({ active, isDark }) =>
    active ? (isDark ? "#fff" : "#111827") : isDark ? "#888" : "#6b7280"};
  border-bottom: 2px solid
    ${({ active, isDark }) =>
      active ? (isDark ? "#3b82f6" : "#111827") : "transparent"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ isDark }) => (isDark ? "#ddd" : "#111827")};
  }
`;

export const PreviewBox = styled.div<{ isDark: boolean }>`
  padding: 1rem;
  background-color: ${({ isDark }) => (isDark ? "#2d2d2d" : "#f9fafb")};
  transition: background 0.3s ease;

  /* Apply default form field styles */
  input,
  select,
  textarea {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    border: 1px solid ${({ isDark }) => (isDark ? "#444" : "#ccc")};
    background: ${({ isDark }) => (isDark ? "#2a2a2a" : "#fff")};
    color: ${({ isDark }) => (isDark ? "#f9fafb" : "#1a1a1a")};
    font-size: 0.875rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0rem;
  }

  input[type="checkbox"],
  input[type="radio"] {
    width: auto;
    margin-right: 0.5rem;
  }

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: ${({ isDark }) => (isDark ? "#e5e7eb" : "#111827")};
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    background: ${({ isDark }) => (isDark ? "#3b82f6" : "#2563eb")};
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
      background: ${({ isDark }) => (isDark ? "#2563eb" : "#1d4ed8")};
    }
  }

  fieldset {
    border: 1px solid ${({ isDark }) => (isDark ? "#444" : "#ccc")};
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
  }

  legend {
    padding: 0 0.5rem;
    font-weight: 600;
    color: ${({ isDark }) => (isDark ? "#e5e7eb" : "#111827")};
  }
`;

export const CodeWrapper = styled.div`
  position: relative;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
`;

export const Button = styled.button<{ isDark: boolean }>`
  background: ${({ isDark }) => (isDark ? "#d1d5db" : "#636b77")};
  border: 1px solid #636b77;
  border: 1px solid #d1d5db;
  padding: 0.25rem 0.75rem;
  color: ${({ isDark }) => (isDark ? "#636b77" : "#d1d5db")};
  font-size: 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #e5e7eb;
  }
`;

export const CodeBox = styled.div`
  max-height: 400px;
  overflow: auto;
`;

export const CopiedBubble = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 50%;
  background: #10b981;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  z-index: 1;
  transition: 0.3;
`;

export const ErrorMessage = styled.div`
  font-size: 0.875rem;
  color: #ef4444;
  padding: 0.5rem 1rem;
  font-family: monospace;
`;
