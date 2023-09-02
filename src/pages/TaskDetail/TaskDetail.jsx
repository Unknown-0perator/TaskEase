import './TaskDetail.scss'
import Tag from '../../components/Tag/Tag';



const TaskDetail = () => {
    return (
        <div className="task-detail-container">
            <div className="task-detail">

                <div className="task-detail__header">
                    <h1 className="task-detail__heading">Social media content</h1>
                </div>
                <div className="flex-wrapper-tablet">
                    <div className="task-detail__body">
                        <div className="flex-row-wrapper">
                            <div className="task-detail__group">
                                <div className="img__container">
                                </div>
                                <div className="task-detail__info">
                                    <p className="task-detail__title">Posted by</p>
                                    <p className="task-detail__content">Thomas A.</p>
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
                                <p className="task-detail__content">Wed, Sep 5th</p>
                            </div>
                        </div>
                        <div className="task-detail__group">
                            <div className="img__container">
                            </div>
                            <div className="task-detail__info">
                                <p className="task-detail__title">Status</p>
                                <Tag type='open' />
                            </div>
                        </div>
                        <div className="task-detail__group">
                            <div className="img__container">
                            </div>
                            <div className="task-detail__info">
                                <p className="task-detail__title">Details</p>
                                <p className="task-detail__content">I need a great instructor to help break down the steps in order of first behind wheel driving. I need an instructor to test me on my knowledge on the skill of Legal Driving , like all the rules. </p>
                            </div>
                        </div>
                    </div>
                    <div className="offer">
                        <div className="offer__text">
                            <p className="offer__title">Budget</p>
                            <p className="offer__budget">CAD 200</p>
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

                    <div className="comment__output">
                        <div className="comment__img-container"></div>
                        <div className="comment__wrapper">
                            <div className="comment__header">
                                <p className="comment__user">Ahmad</p>
                                <p className="comment__date">12/21/2024</p>
                            </div>
                            <p className="comment__text">This task is an scam</p>
                        </div>
                    </div>



                </section>
            </div>
        </div>
    )
}

export default TaskDetail;