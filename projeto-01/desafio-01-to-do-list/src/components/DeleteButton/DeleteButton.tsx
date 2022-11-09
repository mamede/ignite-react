import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import styled from "./DeleteButton.module.css";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton({ ...props }: DeleteButtonProps) {
  return (
    <div className={styled.container}>
      <button
        type="button"
        className={styled.button}
        {...props}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}