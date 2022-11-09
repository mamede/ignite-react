import { useState, useEffect } from "react";
import { Notepad } from "phosphor-react";

import { TaskProps, Task } from "../../App.types";

import { TaskItemCard } from "../TaskItemCard/TaskItemCard";

import styled from "./TaskList.module.css";

export function TaskList({ 
  availableTasks,
  onSetAvailableTasks
}: TaskProps) {
  const [countTasksDone, setCountTasksDone] = useState(0);

  function handleDeleteButton(taskToDelete: Task) {
    const newTasks = [...availableTasks];
    const taskIndex = newTasks.findIndex(availableTask => availableTask.id == taskToDelete.id);
    newTasks.splice(taskIndex, 1);
    onSetAvailableTasks(newTasks);
  }

  function handleTaskDone(checkedTask: Task) {
    const newTasks = [...availableTasks];
    newTasks.forEach(availableTask => {
      if (availableTask.id === checkedTask.id) {
        availableTask = checkedTask;
      }
    });
    const tasksDone = newTasks.filter(task => task.isDone === true);
    setCountTasksDone(tasksDone.length);
  }

  useEffect(() => {
    const newTasks = [...availableTasks];
    const tasksDone = newTasks.filter(task => task.isDone === true);
    setCountTasksDone(tasksDone.length);
  }, [availableTasks]);

  return (
    <div className={styled.container}>
      <header className={styled.header}>
        <p>Tarefas criadas<span>{availableTasks.length}</span></p>
        <p>Concluídas<span>{availableTasks.length === 0 ? 0 : `${countTasksDone} de ${availableTasks.length}`}</span></p>
      </header>
      <div className={availableTasks.length === 0 ? styled.emptyTasks : styled.none}>
        <Notepad size={56} />
        <p>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
      {availableTasks.map(availableTask =>
        <TaskItemCard
          key={availableTask.id}
          availableTask={availableTask}
          onDeleteTask={handleDeleteButton}
          handleTaskDone={handleTaskDone}
        />
      )}
    </div>
  );
}