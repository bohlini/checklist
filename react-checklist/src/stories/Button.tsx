interface buttonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
  onClick,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: variant === "primary" ? "#000000" : "#FFFFFF",
        color: variant === "primary" ? "#FFFFFF" : "#000000",
        padding: "10px",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  );
};
