import './ApplicationTaskCard.scss';
import { displayDate } from '../../utilities/utilities';
import Tag from '../Tag/Tag';

const ApplicationTaskCard = ({ task }) => {
    return (
        <li className="profile__task-item">
            <div className="profile-task">
                <div className="profile-task__header">
                    <p className="profile-task__title">{task.title}</p>
                    <p class="task-detail__date">{displayDate(task.timestamp)}</p>
                </div>
                <div className="profile-task__body-container">
                    <div className="profile-task__body">
                        <div className="profile-task__detail-group">
                            <p className="profile-task__label">Date</p>
                            <p className="profile-task__info">{displayDate(task.date, 'dayFormat')}</p>
                        </div>
                        <div className="profile-task__detail-group">
                            <p className="profile-task__label">Location</p>
                            <p className="profile-task__info">{(task.type === 'In-Person') ? `${task.city}` : ('Remote')}</p>
                        </div>
                        <div className="profile-task__detail-group">
                            <p className="profile-task__label">Budget</p>
                            <p className="profile-task__info">{`CAD ${task.offer_amount}`}</p>
                        </div>

                    </div>
                    <div className="profile__flex-container">
                        <div className="profile-task__detail-group">
                            <p className="profile-task__label">Status</p>
                            <Tag type='application' status={`${task.status}`}></Tag>
                        </div>


                        <div className="profile-task__detail-group">
                            <p className="profile-task__label">Offer</p>
                            <p className="profile-task__budget">{`CAD ${task.offer_amount}`}</p>
                        </div>


                    </div>
                </div>
            </div>
        </li>
    )
}

export default ApplicationTaskCard;