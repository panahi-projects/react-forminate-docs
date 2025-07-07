import React from "react";
import clsx from "clsx";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  icon,
  title,
  description,
  hoverEffect = true,
}) {
  return (
    <div className={clsx(styles.card, { [styles.hoverEffect]: hoverEffect })}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
