import './Task.scss';
import Tag from '../Tag/Tag';
import { displayDate } from '../../utilities/utilities';

const Task = ({ task, API_URL }) => {
    return (
        <div className="task">
            <div className="task__header">
                <p className="task__title">{task.title}</p>
                <Tag status={task.status} />
            </div>
            <div className="task__body">
                <div className="task__detail-group">
                    <p className="task__label">Date</p>
                    <p className="task__info">{task.flexible === 1 ? `Flexible` : displayDate(task.date, 'dayFormat')}</p>
                </div>
                <div className="task__detail-group">
                    <p className="task__label">Location</p>
                    <p className="task__info">{task.city}</p>
                </div>
                <div className="task__detail-group">
                    <p className="task__label">Type</p>
                    <p className="task__info">{task.type}</p>
                </div>
            </div>
            <div className="task__footer">
                <div className="task__user-profile-container">
                    {(task.user_image !== "") ? (
                        <img src={`${API_URL}/${task.user_image}`} alt="" className='task__user-profile' />
                    ) : <></>}
                </div>
                <div className="task__budget">{`CAD ${task.budget}`}</div>
            </div>
        </div>
    )
}

export default Task;