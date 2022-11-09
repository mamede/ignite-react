import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styled from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <div className={styled.container}>
      <button
        className={styled.button}
        {...props}
      >
        {title}
        <PlusCircle size={16} />
      </button>
    </div>
  );
}