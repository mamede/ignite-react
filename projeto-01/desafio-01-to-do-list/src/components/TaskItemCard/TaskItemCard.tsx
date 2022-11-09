import { Checkbox } from "../Checkbox/Checkbox";
import { DeleteButton } from "../DeleteButton/DeleteButton";

import { Task } from "../../App.types";

import styled from "./TaskItemCard.module.css";

import { ChangeEvent } from "react";

interface TaskItemCardProps {
  availableTask: Task;
  onDeleteTask: (availableTask: Task) => void;
  handleTaskDone: (availableTask: Task) => void;
}

export function TaskItemCard({ 
  availableTask, 
  onDeleteTask, 
  handleTaskDone 
}: TaskItemCardProps) {

  function handleDeleteTask(event: any) {
    onDeleteTask(availableTask);
  }

  function handleOnChange(event: ChangeEvent) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      availableTask.isDone = !availableTask.isDone;
    }

    handleTaskDone(availableTask);
  }

  return (
    <div className={styled.container}>
      <Checkbox availableTask={availableTask} onChange={handleOnChange} />
      <DeleteButton onClick={handleDeleteTask} />
    </div>
  );
}