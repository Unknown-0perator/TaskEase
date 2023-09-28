import './CommentOutput';
import { displayDate } from '../../utilities/utilities';

const CommentOutput = ({ comment, API_URL }) => {
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
}

export default CommentOutput;