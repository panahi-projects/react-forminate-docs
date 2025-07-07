import React from "react";
import styles from "./ComparisonTable.module.css";

export default function ComparisonTable({ data }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className={index === 0 ? styles.featureHeader : styles.header}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cellIndex === 0 ? styles.featureCell : styles.cell}
                  data-label={data.headers[cellIndex]}
                >
                  {renderCellContent(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderCellContent(content) {
  if (content === "✅")
    return <span className="badge badge--success">Yes</span>;
  if (content === "❌") return <span className="badge badge--danger">No</span>;
  if (content === "⚠️")
    return <span className="badge badge--warning">Partial</span>;
  return content;
}
