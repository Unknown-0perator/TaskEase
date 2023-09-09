import './TaskDetail.scss'
import Tag from '../../components/Tag/Tag';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { displayDate } from '../../utilities/utilities';



const TaskDetail = ({ API_URL }) => {
    const { taskId } = useParams();
    const [taskDetail, setTaskDetail] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/tasks/${taskId}`).then((response) => {
            setTaskDetail(response.data[0])
        })
        axios.get(`${API_URL}/tasks/${taskId}/comments`).then((response) => {
            setComments(response.data)
        })
    }, [])

    return (
        <div className="task-detail-container margin-header">
            <div className="task-detail">
                {taskDetail ? (
                    <>
                        <div className="task-detail__header">
                            <h1 className="task-detail__heading">{taskDetail.title}</h1>
                        </div>
                        <div className="flex-wrapper-tablet">
                            <div className="task-detail__body">
                                <div className="flex-row-wrapper">
                                    <div className="task-detail__group">
                                        <div className="img__container">
                                        </div>
                                        <div className="task-detail__info">
                                            <p className="task-detail__title">Posted by</p>
                                            <p className="task-detail__content">{`${taskDetail.poster_fname} ${taskDetail.poster_lname}`}</p>
                                        </div>
                                    </div>
                                    <p className="task-detail__date">about 2 hours ago</p>
                                </div>
                                <div className="task-detail__group">
                                    <div className="img__container">
                                    </div>
                                    <div className="task-detail__info">
                                        <p className="task-detail__title">Location</p>
                                        <p className="task-detail__content">Remote</p>
                                    </div>
                                </div>
                                <div className="task-detail__group">
                                    <div className="img__container">
                                    </div>
                                    <div className="task-detail__info">
                                        <p className="task-detail__title">Date</p>
                                        <p className="task-detail__content">{taskDetail.flexible === 1 ? `Flexible` : displayDate(taskDetail.date, 'dayFormat')}</p>
                                    </div>
                                </div>
                                <div className="task-detail__group">
                                    <div className="img__container">
                                    </div>
                                    <div className="task-detail__info">
                                        <p className="task-detail__title">Status</p>
                                        <Tag status={taskDetail.status} />
                                    </div>
                                </div>
                                <div className="task-detail__group">
                                    <div className="img__container">
                                    </div>
                                    <div className="task-detail__info">
                                        <p className="task-detail__title">Details</p>
                                        <p className="task-detail__content">{taskDetail.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="offer">
                                <div className="offer__text">
                                    <p className="offer__title">Budget</p>
                                    <p className="offer__budget">CAD {taskDetail.budget}</p>
                                </div>
                                <button className="offer__button">Send an offer</button>
                            </div>
                        </div>
                        <section className="comment">


                            <p className="comment__count comment__count--bold">Comments</p>
                            <div className="comment__input">
                                <div className="comment__img-container u-margin-top">
                                    <img src="" alt="user profile" className="comment__img" />
                                </div>
                                <form className="comment__form">
                                    <div className="comment__form__group">
                                        <label className="comment__form__label" htmlFor="comment">Join the conversation</label>
                                        <textarea
                                            className="comment__form__input comment__form__input--textarea"

                                            name="comment" id="comment"
                                            placeholder="Add a new comment"

                                            required>
                                        </textarea>
                                    </div>
                                    <button className="comment__button">Comment</button>
                                </form>
                            </div>
                            {/* Sort comments based on timestamp */}

                            {comments.map(comment => {
                                return (
                                    <div className="comment__output">
                                        <div className="comment__img-container"></div>
                                        <div className="comment__wrapper">
                                            <div className="comment__header">
                                                <p className="comment__user">{`${comment.first_name} ${comment.last_name}`}</p>
                                                <p className="comment__date">{displayDate(comment.timestamp)}</p>
                                            </div>
                                            <p className="comment__text">{comment.comment_text}</p>
                                        </div>
                                    </div>
                                )
                            })}




                        </section>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default TaskDetail;