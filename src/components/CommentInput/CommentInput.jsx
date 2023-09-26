import './CommentInput.scss';

const CommentInput = ({ isLoggedIn, profileData, API_URL }) => {
    return (
        <>
            {

                isLoggedIn ? (
                    <div className="comment__input" >
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

                    </div >
                ) : (<></>)}
        </>
    )
}

export default CommentInput;