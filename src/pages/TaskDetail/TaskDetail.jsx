import './TaskDetail.scss'
import Tag from '../../components/Tag/Tag';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { displayDate } from '../../utilities/utilities';
import { Link } from 'react-router-dom';




const TaskDetail = ({ API_URL, profileData, isLoggedIn }) => {
    const [offer, setOffer] = useState(0)
    const [offerError, setOfferError] = useState(true)
    const [canSendOffer, setCanSendOffer] = useState(true)
    const [offerDetail, setOfferDetail] = useState({})
    const [offerErrorMessage, setOfferErrorMessage] = useState('')
    const { taskId } = useParams();
    const [taskDetail, setTaskDetail] = useState({})
    const [comments, setComments] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${API_URL}/tasks/${taskId}`).then((response) => {
            setTaskDetail(response.data[0])
        })
        axios.get(`${API_URL}/tasks/${taskId}/comments`).then((response) => {
            setComments(response.data)
        })
        axios.get(`${API_URL}/tasks/${taskId}/offer`).then((response) => {
            response.data.map(offer => {
                if (offer.user_id === profileData.user_id) {
                    setOfferDetail(offer)
                    setCanSendOffer(false)
                }
                else {
                    setCanSendOffer(true)
                }
            })
        })
    }, [API_URL, profileData.user_id, taskId])


    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (offerError) {
            return;
        }
        axios.post(`${API_URL}/tasks/${taskId}/offer`, {
            user_id: profileData.user_id,
            offer_amount: offer
        }).then(() => {
            axios.get(`${API_URL}/tasks/${taskId}/offer`).then((response) => {
                response.data.map(offer => {
                    if (offer.user_id === profileData.user_id) {
                        setOfferDetail(offer)
                        setCanSendOffer(false)
                    }
                    else {
                        setCanSendOffer(true)
                    }
                })
            })
        }).catch(err => {

        })
        event.target.reset()
    }


    const withdrawOffer = (offerId) => {
        axios.delete(`${API_URL}/tasks/${taskId}/offer/${offerId}`)
        setCanSendOffer(true)
    }

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
                                {isLoggedIn ? (
                                    <> {canSendOffer ? (
                                        <form className="form-offer" onSubmit={handleFormSubmit}>
                                            <input onChange={(e) => {
                                                setOffer(e.target.value)
                                                if (e.target.value <= 0) {
                                                    setOfferErrorMessage('Please Enter a valid amount')
                                                    setOfferError(true)
                                                } else if (e.target.value > taskDetail.budget) {
                                                    setOfferErrorMessage('Your offer is more than budget')
                                                    setOfferError(true)
                                                } else {
                                                    setOfferErrorMessage('')
                                                    setOfferError(false)
                                                }
                                            }} type="number" className="form-offer__input" placeholder='Type your offer amount' />

                                            <p className="error_message">{offerErrorMessage}</p>
                                            <button type='submit' className="offer__button">Send an offer</button>
                                        </form>
                                    ) : (
                                        <><div className="offer__text">
                                            <p className="offer__title">Offer Amount</p>
                                            <p className="offer__amount">{`CAD ${offerDetail.offer_amount}`}</p>
                                        </div>
                                            <p className="success_message">{`You have already sent an offer`}</p>
                                            <button onClick={() => {
                                                withdrawOffer(offerDetail.offer_id)
                                            }} className="offer__button">withdraw Offer</button>
                                        </>
                                    )}
                                    </>
                                ) : (<Link to='/login' className="offer__button">Login to send Offer</Link>)}

                            </div>
                        </div>
                        <section className="comment">
                            {(comments.length !== 0) ? (
                                <p className="comment__count comment__count--bold">Comments</p>)
                                : (
                                    <p className="comment__count comment__count--bold">No Comment</p>)
                            }
                            {isLoggedIn ? (
                                <div className="comment__input">
                                    <div className="comment__img-container u-margin-top">
                                        {(profileData && profileData.user_image !== "") ? (
                                            <img src={`${API_URL}${profileData.user_image}`} alt="user profile" className="comment__img" />
                                        ) : (<></>)}
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
                            ) : (<></>)}
                            {/* Sort comments based on timestamp */}

                            {comments.map(comment => {
                                return (
                                    <div className="comment__output">
                                        <div className="comment__img-container">
                                            {(comment.user_image !== "") ? (
                                                <img src={`${API_URL}/${comment.user_image}`} alt="" className='comment__img' />
                                            ) : <></>}
                                        </div>
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
        </div >
    )
}

export default TaskDetail;