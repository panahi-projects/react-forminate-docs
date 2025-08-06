import { CheckIcon, Clipboard } from "lucide-react";
import { useState } from "react";
import styles from "./CopyButton.module.css";

export default function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={styles.button}
      title="Copy to clipboard"
    >
      {copied ? (
        <CheckIcon className={styles.checkIcon} />
      ) : (
        <Clipboard className={styles.icon} />
      )}
    </button>
  );
}
