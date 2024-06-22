import { FaTimes } from 'react-icons/fa'

// we dont have access to update task here we have access to update them in just App.js, so we need to use prop drilling(sending down function as a prop from App.js). 
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
};

export default Task;
