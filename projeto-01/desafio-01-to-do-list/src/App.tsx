import { useState } from 'react'
import { Task } from './App.types'
import { Header } from './components/Header/Header'
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

import './styles/global.css'
import styled from './App.module.css'

function App() {
  const [taks, setTaks] = useState<Task[]>([])

  return (
    <div>
      <Header />
      <div className={styled.contentContainer}>
        <div className={styled.newTaskContainer}>
          <form className={styled.form}>
            <Input
              placeholder="Adicione uma nova tarefa"
              onChange={(): void => {}}
              onInvalid={(): void => {}}
              value={undefined}
              required
            />
            <Button type="submit" title="Criar" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
