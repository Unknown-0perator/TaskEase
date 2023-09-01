import './PostTask.scss';
import logo from '../../assets/logos/1.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import { OrDivider } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { useRef } from 'react';

const nextClick = (refArray, nextPage, sideRefArray, nextSideBar) => {
    sideRefArray.map(ref => {
        ref.current.classList.remove('post-task__sidebar__item--active')
    })
    nextSideBar.current.classList.add('post-task__sidebar__item--active')

    refArray.map(ref => {
        ref.current.classList.add('post-task__container--hidden')
    })
    nextPage.current.classList.remove('post-task__container--hidden')
}

const backClick = (refArray, previousPage, sideRefArray, previousSideBar) => {
    sideRefArray.map(ref => {
        ref.current.classList.remove('post-task__sidebar__item--active')
    })
    previousSideBar.current.classList.add('post-task__sidebar__item--active')

    refArray.map(ref => {
        ref.current.classList.add('post-task__container--hidden')
    })
    previousPage.current.classList.remove('post-task__container--hidden')
}

const sideBarClick = (refArray, currentPage, sideRefArray, currentSidebar) => {
    sideRefArray.map(ref => {
        ref.current.classList.remove('post-task__sidebar__item--active')
    })
    currentSidebar.current.classList.add('post-task__sidebar__item--active')

    refArray.map(ref => {
        ref.current.classList.add('post-task__container--hidden')
    })
    currentPage.current.classList.remove('post-task__container--hidden')
}



const PostTask = () => {



    const titleDateRef = useRef();
    const locationRef = useRef();
    const detailRef = useRef();
    const budgetRef = useRef();
    const sideTitleDateRef = useRef();
    const sideLocationRef = useRef();
    const sideDetailRef = useRef();
    const sideBudgetRef = useRef();

    const refArray = [titleDateRef, locationRef, detailRef, budgetRef]
    const sideRefArray = [sideTitleDateRef, sideLocationRef, sideDetailRef, sideBudgetRef]


    return (
        <div className="post-task">
            <sidebar className="post-task__sidebar">
                <ul className="post-task__sidebar__list">
                    <li onClick={(e) => {
                        e.preventDefault();
                        sideBarClick(refArray, titleDateRef, sideRefArray, sideTitleDateRef)
                    }} ref={sideTitleDateRef} className="post-task__sidebar__item post-task__sidebar__item--active"><a href="" className="post-task__sidebar__link">Title and Date</a> </li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        sideBarClick(refArray, locationRef, sideRefArray, sideLocationRef)
                    }} ref={sideLocationRef} className="post-task__sidebar__item"><a href="" className="post-task__sidebar__link">Location</a> </li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        sideBarClick(refArray, detailRef, sideRefArray, sideDetailRef)
                    }} ref={sideDetailRef} className="post-task__sidebar__item"><a href="" className="post-task__sidebar__link">Details</a> </li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        sideBarClick(refArray, budgetRef, sideRefArray, sideBudgetRef)
                    }} ref={sideBudgetRef} className="post-task__sidebar__item"><a href="" className="post-task__sidebar__link">Budget</a> </li>
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
                        nextClick(refArray, locationRef, sideRefArray, sideLocationRef)
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
                            backClick(refArray, titleDateRef, sideRefArray, sideTitleDateRef)
                        }} className="post-task__button post-task__button--cancel">Back</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            nextClick(refArray, detailRef, sideRefArray, sideDetailRef)
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
                            backClick(refArray, locationRef, sideRefArray, sideLocationRef)
                        }} className="post-task__button post-task__button--cancel">Back</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            nextClick(refArray, budgetRef, sideRefArray, sideBudgetRef)
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
                            backClick(refArray, detailRef, sideRefArray, sideDetailRef)
                        }} className="post-task__button post-task__button--cancel">Back</button>
                        <button className="post-task__button post-task__button--submit">Post the task <img src={arrowIcon} alt="" className="button__icon" /></button>
                    </div>
                </form>






            </div>



        </div>
    )

}

export default PostTask;