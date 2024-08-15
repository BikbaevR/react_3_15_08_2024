
const TaskItem = ({task, setTask, tasks}) => {

    const changeStatus = () => {
        let tempTasks = [...tasks]
        let changeStatus = tempTasks.find(t => t.id === task.id)
        changeStatus.is_done = true
        setTask(tempTasks)
    }

    const deleteTask = () => {
        setTask(tasks.filter(e => e.id !== task.id))
    }


    return(
        <div className={`task-item ${task.is_done ? "task-done": 'task'}`}>
            <div className={"text-center"}>
                <p>{task.id}</p>
                <p>{task.text}</p>
            </div>
            <div>
                <button disabled={task.is_done} onClick={changeStatus}>{task.is_done ? 'Выполнено': 'Выполнить'}</button>
                <button onClick={deleteTask}>Удалить</button>
            </div>
        </div>
    )
}

export default TaskItem