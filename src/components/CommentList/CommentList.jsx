import './CommentList.scss';
import CommentInput from '../CommentInput/CommentInput';
import CommentOutput from '../CommentOutput/CommentOutput';
const CommentList = ({ isLoggedIn, profileData, API_URL, taskId, comments }) => {
    return (
        <section className="comment">
            {(comments.length !== 0) ? (
                <p className="comment__count comment__count--bold">Comments</p>)
                : (
                    <p className="comment__count comment__count--bold">No Comment</p>)
            }
            <CommentInput isLoggedIn={isLoggedIn} profileData={profileData} API_URL={API_URL} taskId={taskId} />
            {/* Sort comments based on timestamp */}

            {comments.map(comment => {
                return (
                    <CommentOutput comment={comment} API_URL={API_URL} key={comment.comment_id} />
                )
            })}




        </section>
    )
}

export default CommentList;