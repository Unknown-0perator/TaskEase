import './CommentList.scss';
import CommentInput from '../CommentInput/CommentInput';
import CommentOutput from '../CommentOutput/CommentOutput';
import { useEffect, useState } from 'react';
import axios from 'axios';
const CommentList = ({ isLoggedIn, profileData, API_URL, taskId }) => {
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);

    const newComment = {
        comment_text: commentInput,
        task_id: taskId,
        user_id: profileData.user_id
    }


    useEffect(() => {
        axios.get(`${API_URL}/comment/task/${taskId}`).then((response) => {
            setComments(response.data)
        })
    }, [API_URL, taskId])

    const handleCommentPost = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/comment`, newComment).then(() => {
            setCommentInput('');
            event.target.reset();
            axios.get(`${API_URL}/comment/task/${taskId}`).then((response) => {
                setComments(response.data)
            })
        })
    }




    return (
        <section className="comment">
            {(comments.length !== 0) ? (
                <p className="comment__count comment__count--bold">Comments</p>)
                : (
                    <p className="comment__count comment__count--bold">No Comment</p>)
            }
            <CommentInput handleCommentPost={handleCommentPost} setCommentInput={setCommentInput} isLoggedIn={isLoggedIn} profileData={profileData} API_URL={API_URL} taskId={taskId} />

            {comments.sort((a, b) => {
                return b.timestamp - a.timestamp
            }).map(comment => {
                return (
                    <CommentOutput comment={comment} API_URL={API_URL} key={comment.comment_id} />
                )
            })}




        </section>
    )
}

export default CommentList;