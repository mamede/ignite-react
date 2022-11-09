import { InputHTMLAttributes } from "react";
import { Task } from "../../App.types";

import styled from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  availableTask: Task;
}

export function Checkbox({ availableTask, ...props }: CheckboxProps) {
  return (
    <div className={styled.container}>
      <label className={styled.label}>
        <input type="checkbox" {...props} />
        <p>
          {availableTask.taskContent}
        </p>
        <span className={styled.checkmark}></span>
      </label>
    </div>
  );
}