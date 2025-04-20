import React, { useState } from "react";
import Prism from "prismjs";
import { Highlight, themes } from "prism-react-renderer";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";

type PlaygroundProps = {
  children: React.ReactNode;
  code: string;
};

export const Playground: React.FC<PlaygroundProps> = ({ children, code }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="border rounded-xl shadow-md overflow-hidden bg-white my-6">
      {/* Tabs */}
      <div className="flex border-b bg-gray-100">
        {["preview", "code"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "preview" | "code")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "bg-white border-b-2 border-blue-500"
                : "text-gray-600"
            }`}
          >
            {tab === "preview" ? "Preview" : "Code"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "preview" ? (
          <div className="bg-gray-50 p-4 rounded">{children}</div>
        ) : (
          <pre className="language-jsx rounded overflow-auto text-sm">
            <code
              className="language-jsx"
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(code, Prism.languages.jsx, "jsx"),
              }}
            />
          </pre>
        )}
      </div>
    </div>
  );
};
