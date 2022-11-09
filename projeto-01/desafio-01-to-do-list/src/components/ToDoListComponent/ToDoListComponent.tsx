import { CreateTaskInput } from "../CreateTaskInput/CreateTaskInput";

import { TaskProps, Task } from "../../App.types";

import styled from "./ToDoListComponent.module.css";
import { TaskList } from "../TasksList/TasksList";

export function ToDoListComponent({ 
  availableTasks, 
  onSetAvailableTasks 
}: TaskProps) {
  function handleSetAvailableTasks(newTasks: Task[]) {
    onSetAvailableTasks(newTasks);
  }

  return(
    <div className={styled.container}>
      <CreateTaskInput 
        availableTasks={availableTasks} 
        onSetAvailableTasks={handleSetAvailableTasks} 
      />
      <TaskList 
        availableTasks={availableTasks} 
        onSetAvailableTasks={handleSetAvailableTasks} 
      />
    </div>
  );
}