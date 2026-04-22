import styles from "./Button.module.css";

interface buttonProps {
  label: string;
  variant?: "primary" | "neutral" | "subtle";
  disabled?: boolean;
}

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
}: buttonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${styles[variant]}`}
    >
      {label}
    </button>
  );
};
