import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuid } from "uuid";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import { initialTaskState, Task, TaskProps } from '../../App.types'

import styled from "./CreateTaskInput.module.css";

export function CreateTaskInput({ 
  availableTasks, 
  onSetAvailableTasks
}: TaskProps) {
  const [newTask, setNewTask] = useState<Task>(initialTaskState);

  function handleOnInvalidInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask({
      id: '',
      taskContent: event.target.value,
      isDone: false,
    });
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const newTasks = [...availableTasks];
    newTask.id = uuid();
    newTasks.push(newTask);
    onSetAvailableTasks(newTasks);
    setNewTask(initialTaskState);
  }
  return (
    <div className={styled.contentContainer}>
      <div className={styled.newTaskContainer}>
        <form 
          className={styled.form}
          onSubmit={handleFormSubmit}
        >
          <Input
            placeholder="Adicione uma nova tarefa"
            onChange={handleOnChangeInput}
            onInvalid={handleOnInvalidInput}
            value={newTask.taskContent}
            required
          />
          <Button type="submit" title="Criar" />
        </form>
      </div>
    </div>
  );
}