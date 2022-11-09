export interface Task {
  id: string;
  taskContent: string;
  isDone: boolean;
}

export interface TaskProps {
  availableTasks: Task[];
  onSetAvailableTasks: (newTasks: Task[]) => void;
}

export const initialTaskState: Task = {
  id: '',
  taskContent: '',
  isDone: false,
}