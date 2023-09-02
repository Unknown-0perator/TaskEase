import './TaskDetail.scss'
import Tag from '../../components/Tag/Tag';


const TaskDetail = () => {
    return (
        <div className="task-detail-container">
            <div className="task-detail">
                <div className="task-detail__header">
                    <h1 className="task-detail__heading">Social media content</h1>
                </div>
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
        </div>
    )
}

export default TaskDetail;