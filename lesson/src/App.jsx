import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddForm from './component/AddForm'
import Tasks from './component/Tasks'




function App() {
  const [tasks, setTasks] = useState([
      {
          id:1,
          text:'text',
          is_done: true,
      },
      {
          id:2,
          text:'text',
          is_done: false,
      },
  ])

  return (
    <>
      <div className='container'>
        <AddForm tasks={tasks} setTasks={setTasks} />
        <Tasks data={tasks} setTask={setTasks} />
      </div>
    </>
  )
}

export default App
