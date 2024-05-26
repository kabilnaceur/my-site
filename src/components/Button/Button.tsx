import { FC } from "react";
import styles from "./button.module.scss";

export interface buttonProps {
  content: string;
  color: string;
  backgroundColor: string;
  onClick?: () => void;
}
const Button: FC<buttonProps> = ({
  content,
  color,
  backgroundColor,
  onClick,
}) => {
  return (
    <button
      type="submit"
      className={`${styles.button}`}
      style={{ color, backgroundColor }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
export default Button;
