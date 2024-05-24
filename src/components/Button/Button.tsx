import { FC } from "react";
import styles from "./button.module.scss";

export interface buttonProps {
  content: string;
  color: string;
  backgroundColor: string;
}
const Button: FC<buttonProps> = ({ content, color, backgroundColor }) => {
  return (
    <button
      type="submit"
      className={`${styles.button}`}
      style={{ color, backgroundColor }}
    >
      {content}
    </button>
  );
};
export default Button;
