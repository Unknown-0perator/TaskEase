import './Popup.scss';

const Popup = ({ text, onClick }) => {
    return (

        <div className="popup">
            <div className="popup__container">
                <p className="popup__text">{text}</p>
                <button className="popup__btn" onClick={onClick}>Close</button>
            </div>
        </div>


    )
}

export default Popup;