import './PostedTaskCard.scss';
import { displayDate } from '../../utilities/utilities';
import { useState } from 'react';
import axios from 'axios';

const PostedTaskCard = ({ task, API_URL, profileData }) => {
    let [offerCount, setOfferCount] = useState(0)
    axios.get(`${API_URL}/tasks/${task.task_id}/offer`).then((response) => {
        response.data.map(offer => {
            if (offer.user_id === profileData.user_id) {
                setOfferCount(offerCount++)
            }
            else {
                setOfferCount(offerCount)
            }
        })
    })
    return (
        <div className="profile-task">
            <div className="profile-task__header">
                <p className="profile-task__title">{task.title}</p>
                <p className="profile-task__offer"> <span className='profile-task__offer--number'>{offerCount}</span> Offers</p>

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