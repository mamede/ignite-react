import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        {...props}
      >
        {title}
        <PlusCircle size={16} />
      </button>
    </div>
  );
}