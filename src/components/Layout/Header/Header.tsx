import { BadgeCheck, CircleCheckBig, Lightbulb } from "lucide-react";
import styles from "./Header.module.css";
import Button from "../../ui/Button/Button";
const Header = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Build Forms Faster — Without the{" "}
          <span className="text-primary">Boilerplate</span>.
        </h1>
        <p className={styles.subtitle}>
          <span>
            <strong>React-Forminate</strong> turns JSON schemas into dynamic
            forms with built-in validation, conditional logic, and API-powered
            fields.
          </span>
          <br />
          <span>
            Spend less time wiring forms, more time building features.
          </span>
        </p>

        <div className={styles.ctaContainer}>
          <Button variant="default" color="primary">
            Get Started
          </Button>
          <Button variant="outline" color="primary">
            Examples
          </Button>
        </div>
        <div>
          <span className={styles.availabilityBadge}>
            <span className={styles.badgeCircle}></span> v1.1.0 Just Released
          </span>
        </div>

        <div className={styles.clientsSection}>
          <p className={styles.clientsTitle}>
            <Lightbulb /> <span>Ideal Use Cases:</span>
          </p>
          <div className={styles.useCases}>
            <div className={styles.useCase}>
              <BadgeCheck className={styles.icon} />
              <span>Admin Dashboards</span>
            </div>
            <div className={styles.useCase}>
              <BadgeCheck className={styles.icon} />
              <span>Multi-Step Flows</span>
            </div>
            <div className={styles.useCase}>
              <BadgeCheck className={styles.icon} />
              <span>Dynamic Surveys</span>
            </div>
            <div className={styles.useCase}>
              <BadgeCheck className={styles.icon} />
              <span>Configurable UIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
