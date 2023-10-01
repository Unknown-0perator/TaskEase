import './PostedTaskCard.scss';
import { displayDate } from '../../utilities/utilities';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostedTaskCard = ({ task, API_URL }) => {
    let [offerCount, setOfferCount] = useState(0)
    useEffect(() => {
        axios.get(`${API_URL}/tasks/${task.task_id}/offer`).then((response) => {

            setOfferCount(response.data.length)
        })
    }, [API_URL, task.task_id])

    return (
        <div className="profile-task">
            <div className="profile-task__header">
                <p className="profile-task__title">{task.title}</p>
                <p className="profile-task__offer"> <span className='profile-task__offer--number'>{offerCount}</span> {offerCount === 0 || offerCount === 1 ? 'Offer' : 'Offers'}</p>

            </div>
            <div className="profile-task__body-container">
                <div className="profile-task__body">
                    <div className="profile-task__detail-group">
                        <p className="profile-task__label">Date</p>
                        <p className="profile-task__info">{task.flexible === 1 ? `Flexible` : displayDate(task.date, 'dayFormat')}</p>
                    </div>
                    <div className="profile-task__detail-group">
                        <p className="profile-task__label">Location</p>
                        <p className="profile-task__info">{task.location}</p>
                    </div>

                </div>

                <p className="profile-task__budget">{`CAD ${task.budget}`}</p>

            </div>
        </div>
    )
}

export default PostedTaskCard;