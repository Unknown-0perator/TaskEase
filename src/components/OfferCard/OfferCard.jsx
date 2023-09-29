import './OfferCard.scss';

const OfferCard = ({ userData, API_URL }) => {
    return (
        <li className="offer-list__item">
            <div className="offer-list__profile">

                <div className="offer-list__sender">
                    <div className="offer-list__group">
                        <p className="offer-list__title">Offer sent by</p>
                        <div className="offer-list__user">
                            <div className="offer-list__img-placeholder">
                                {(userData.image !== "") ? (
                                    <img src={`${API_URL}/`} alt="" className='offer-list__img' />
                                ) : <></>}
                            </div>
                            <p className="offer-list__info">Ahmad</p>
                        </div>

                        <p className="offer-list__member">Member since 2017</p>
                    </div>
                    <div className="offer-list__group">
                        <p className="offer-list__title">Has assigned to</p>
                        <p className="offer-list__info tag tag--assigned">23 Tasks</p>
                        <p className="offer-list__info tag tag--open">4 Task Completed</p>
                    </div>
                    <div className="offer-list__group">
                        <p className="offer-list__title">Has posted</p>
                        <p className="offer-list__info">1 Task</p>
                    </div>
                </div>
            </div>

            <div className="offer-list__cta-container">
                <div className="offer-list__amount-container">
                    <p className="offer-list__amount-title">Offer Amount</p>
                    <p className="offer-list__amount">CAD 300</p>
                </div>
                <div className="offer-list__cta-wrapper">

                    <button className="offer-list__cta offer-list__cta--accept">Accept</button>
                    <button className="offer-list__cta offer-list__cta--reject">Reject</button>
                </div>
            </div>
        </li>
    )
}


export default OfferCard;