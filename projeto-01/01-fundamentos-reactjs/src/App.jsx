import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import { Post } from './components/Post/Post'

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Anne Doe" content="Lorem ipsum dolor sit amet, consectetur adip"/>
          <Post author="Anne Doe2" content="Lorem ipsum dolor sit amet, consectetur adip sit amet, consectetur"/>
        </main>
      </div>
    </div>
  )
}
