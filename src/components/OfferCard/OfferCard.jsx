import './OfferCard.scss';
import { Link } from 'react-router-dom';

const OfferCard = ({ offer, API_URL }) => {
    return (
        <li className="offer-list__item">
            <div className="offer-list__profile">

                <div className="offer-list__sender">
                    <div className="offer-list__group">
                        <p className="offer-list__title">Offer sent by</p>
                        <Link to={`user/${offer.user_id}`} className="offer-list__user">
                            <div className="offer-list__img-placeholder">
                                {(offer.image !== "") ? (
                                    <img src={`${API_URL}/${offer.image}`} alt="" className='offer-list__img' />
                                ) : <></>}
                            </div>
                            <div className="offer-list__info-container">
                                <p className="offer-list__info">{`${offer.first_name} ${offer.last_name}`}</p>
                                <p className="offer-list__member">Member since 2017</p>
                            </div>

                        </Link>


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