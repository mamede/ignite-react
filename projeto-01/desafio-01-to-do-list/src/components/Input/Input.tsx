import { InputHTMLAttributes } from "react";

import styled from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <div className={styled.inputContainer}>
      <input className={styled.input} {...props} />
    </div>
  );
}