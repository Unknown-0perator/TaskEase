import './PostTask.scss';
import logo from '../../assets/logos/1.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import { OrDivider } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { useRef } from 'react';

const nextClick = (refArray, nextPage) => {

    refArray.map(ref => {
        ref.current.classList.add('post-task__container--hidden')
    })
    nextPage.current.classList.remove('post-task__container--hidden')
}

const backClick = (refArray, previousPage) => {

    refArray.map(ref => {
        ref.current.classList.add('post-task__container--hidden')
    })
    previousPage.current.classList.remove('post-task__container--hidden')
}


const PostTask = () => {

    const titleDateRef = useRef();
    const locationRef = useRef();
    const detailRef = useRef();
    const budgetRef = useRef();

    const refArray = [titleDateRef, locationRef, detailRef, budgetRef]

    return (
        <div className="post-task">
            <sidebar className="post-task__sidebar">
                <ul className="post-task__sidebar__list">
                    <li className="post-task__sidebar__item">Title and Date</li>
                    <li className="post-task__sidebar__item">Location</li>
                    <li className="post-task__sidebar__item">Details</li>
                    <li className="post-task__sidebar__item">Budget</li>
                </ul>
            </sidebar>

            <div className="post-task__container" ref={titleDateRef}>
                <div className="post-task__header">
                    <img src={logo} alt="" className="post-task__logo" />
                    <h3 className="post-task__heading">Title and Date</h3>
                </div>
                <form className="post-task__form" >
                    <div className="post-task__form__group">
                        <label htmlFor="" className="post-task__form__label">In a few words, what do you need done?</label>
                        <input type="text" className="post-task__form__input" />
                    </div>
                    <div className="post-task__form__group">
                        <label htmlFor="" className="post-task__form__label">When do you need this done?</label>
                        <div className="post-task__form__input-container">
                            <input type="date" className="post-task__form__input post-task__form__input--half" />
                            <input type="time" className="post-task__form__input post-task__form__input--half" />
                        </div>
                        <OrDivider />
                        <div className="post-task__form__checkbox">
                            <input type="checkbox" name="remember_me" id="remember_me" className='post-task__form__checkbox__input' />
                            <label htmlFor="remember_me" className='post-task__form__checkbox__label'>I am flexible</label>
                        </div>

                    </div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        nextClick(refArray, locationRef)
                    }} className="post-task__button post-task__button--submit">Next <img src={arrowIcon} alt="" className="button__icon" /></button>

                </form>






            </div>



            {/* second */}

            <div className="post-task__container post-task__container--hidden" ref={locationRef}>
                <div className="post-task__header">
                    <img src={logo} alt="" className="post-task__logo" />
                    <h3 className="post-task__heading">Location</h3>
                </div>
                <form className="post-task__form" >
                    <div className="post-task__form__group">
                        <label htmlFor="" className="post-task__form__label">Type</label>
                        <select name="" id="" className='post-task__form__input'>
                            <option value="">In-Person</option>
                            <option value="">Online</option>
                        </select>
                    </div>
                    <div className="post-task__form__group">
                        <label htmlFor="" className="post-task__form__label">Where do you need this done?</label>

                        <input type="text" className="post-task__form__input" placeholder='City' />

                        <OrDivider />

                        <input type="text" className="post-task__form__input" placeholder='Postal Code' />


                    </div>
                    <div className="post-task__button-container">
                        <button onClick={(e) => {
                            e.preventDefault();
                            backClick(refArray, titleDateRef)
                        }} className="post-task__button post-task__button--cancel">Back</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            nextClick(refArray, detailRef)
                        }} className="post-task__button post-task__button--submit">Next <img src={arrowIcon} alt="" className="button__icon" /></button>
                    </div>
                </form>






            </div>


            {/* Third */}

            <div className="post-task__container post-task__container--hidden" ref={detailRef}>
                <div className="post-task__header">
                    <img src={logo} alt="" className="post-task__logo" />
                    <h3 className="post-task__heading">Details</h3>
                </div>
                <form className="post-task__form" >
                    <div className="post-task__form__group">
                        <label htmlFor="" className="post-task__form__label">What are the details</label>
                        <textarea type="text" className="post-task__form__input post-task__form__input--textarea" />
                    </div>

                    <div className="post-task__button-container">
                        <button onClick={(e) => {
                            e.preventDefault();
                            backClick(refArray, locationRef)
                        }} className="post-task__button post-task__button--cancel">Back</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            nextClick(refArray, budgetRef)
                        }} className="post-task__button post-task__button--submit">Next <img src={arrowIcon} alt="" className="button__icon" /></button>
                    </div>
                </form>






            </div>

            {/* fourth */}

            <div className="post-task__container post-task__container--hidden" ref={budgetRef}>
                <div className="post-task__header">
                    <img src={logo} alt="" className="post-task__logo" />
                    <h3 className="post-task__heading">Budget</h3>
                </div>
                <form className="post-task__form" >
                    <div className="post-task__form__group">
                        <label htmlFor="" className="post-task__form__label">What is your budget?</label>
                        <input type="text" className="post-task__form__input" />
                    </div>

                    <div className="post-task__button-container">
                        <button onClick={(e) => {
                            e.preventDefault();
                            backClick(refArray, detailRef)
                        }} className="post-task__button post-task__button--cancel">Back</button>
                        <button className="post-task__button post-task__button--submit">Post the task <img src={arrowIcon} alt="" className="button__icon" /></button>
                    </div>
                </form>






            </div>



        </div>
    )

}

export default PostTask;