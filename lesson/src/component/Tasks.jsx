import TaskItem from './TaskItem';

const Tasks = ({data, setTask}) => {
    return(
        <div className="tasks">
            {data.map((task) => (<TaskItem key={task.id} task={task} setTask={setTask} tasks={data}/>))}
        </div>
    )
}

export default Tasks;