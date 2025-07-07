import styles from "./UseCaseCards.module.css";

export default function UseCaseCards({ items }) {
  return (
    <div className={styles.container}>
      <div className="row">
        {items.map((item) => (
          <div className="col col--3" key={item.title}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <div className={styles.cardBody}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
