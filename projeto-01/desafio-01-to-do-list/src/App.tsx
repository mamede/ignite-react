import { useState } from 'react'
import { Task } from './App.types'

import { Header } from './components/Header/Header'
import { ToDoListComponent } from './components/ToDoListComponent/ToDoListComponent'

import './styles/global.css'

function App() {
  const [availableTasks, setAvailableTasks] = useState<Task[]>([])
  
  return (
    <div>
      <Header />
      <ToDoListComponent 
        availableTasks={availableTasks} 
        onSetAvailableTasks={setAvailableTasks}
      />
    </div>
  )
}

export default App
