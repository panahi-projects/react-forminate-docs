import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "default" | "outline" | "link";
type ButtonColor = "primary" | "secondary" | "success" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  color = "primary",
  children,
  className = "",
  ...props
}) => {
  const variantClass = styles[`btn_${variant}`];
  const colorClass = styles[`btn_${variant}_${color}`];

  return (
    <button
      className={`${styles.btn} ${variantClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
