

const AddForm = ({tasks, setTasks}) => {
    let taskText = ''

    const addTask = (event) => {
        event.preventDefault()
        let newTask = {
            id: Date.now(),
            text: taskText,
            is_done: false
        }
        setTasks([...tasks, newTask])
    }

    return(
        <form onSubmit={addTask} action="" className='form'>
            <h3>Добавить задачу</h3>
            <div className='form-container'>
                <input onInput={(event) => taskText = event.target.value} type='text' placeholder='Name'/>
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
        </form>
    )
}


export default AddForm