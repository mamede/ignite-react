import { useState } from 'react'
import { Task } from './App.types'
import { Header } from './components/Header/Header'

import './styles/global.css'

function App() {
  const [taks, setTaks] = useState<Task[]>([])

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
