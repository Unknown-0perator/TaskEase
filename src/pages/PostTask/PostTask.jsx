import './PostTask.scss';
import logo from '../../assets/logos/1.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import { OrDivider } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { useRef, useState } from 'react';
import axios from 'axios';
import { sideBarClick } from '../../utilities/utilities';

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


    const [taskPostForm, setTaskPostForm] = useState({
        title: '',
        description: '',
        budget: '',
        type: '',
        date: '',
        time: '',
        flexible: '',
        poster_id: ''
    })

    const handleInputChange = (event) => {
        setTaskPostForm({
            ...taskPostForm, [event.target.name]: event.target.value
        })
        console.log(`${event.target.name}:${event.target.value}`)
    }

    const API_URL = process.env.REACT_APP_BACKEND_URL;
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/tasks`, {
            title: taskPostForm.task_title,
            description: taskPostForm.task_details,
            budget: taskPostForm.task_budget,
            type: taskPostForm.task_type,
            date: taskPostForm.task_date,
            time: taskPostForm.task_time,
            flexible: taskPostForm.task_flexible,
            poster_id: ''
        }).catch((e) => {
            console.log(e)
        })

        alert('user created successfully')
        setTaskPostForm('')

    }



    return (
        <div className="post-task margin-header">
            <div className="post-task__sidebar">
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
            </div>

            <div className="post-task__container" ref={titleDateRef}>
                <div className="post-task__header">
                    <img src={logo} alt="" className="post-task__logo" />
                    <h3 className="post-task__heading">Title and Date</h3>
                </div>
                <form className="post-task__form" onSubmit={handleFormSubmit}>
                    <div className="post-task__form__group">
                        <label htmlFor="task_title" className="post-task__form__label">In a few words, what do you need done?</label>
                        <input onChange={handleInputChange} type="text" className="post-task__form__input" name='task_title' />
                    </div>
                    <div className="post-task__form__group">
                        <label htmlFor="task_date" className="post-task__form__label">When do you need this done?</label>
                        <div className="post-task__form__input-container">
                            <input onChange={handleInputChange} type="date" className="post-task__form__input post-task__form__input--half" name='task_date' />
                            <input onChange={handleInputChange} type="time" className="post-task__form__input post-task__form__input--half" name='task_time' />
                        </div>
                        <OrDivider />
                        <div className="post-task__form__checkbox">
                            <input onChange={handleInputChange} type="checkbox" name="task_flexible" id="remember_me" className='post-task__form__checkbox__input' />
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
                        <label htmlFor="task_type" className="post-task__form__label">Type</label>
                        <select onChange={handleInputChange} name="task_type" id="" className='post-task__form__input'>
                            <option value="In-Person">In-Person</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                    <div className="post-task__form__group">
                        <label htmlFor="task_city" className="post-task__form__label">Where do you need this done?</label>

                        <input onChange={handleInputChange} type="text" className="post-task__form__input" placeholder='City' name='task_city' />

                        <OrDivider />

                        <input onChange={handleInputChange} type="text" className="post-task__form__input" placeholder='Postal Code' name='task_postal' />


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
                        <label htmlFor="task_details" className="post-task__form__label">What are the details</label>
                        <textarea onChange={handleInputChange} type="text" className="post-task__form__input post-task__form__input--textarea" name='task_details' />
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
                        <label htmlFor="task_budget" className="post-task__form__label">What is your budget?</label>
                        <input onChange={handleInputChange} type="text" className="post-task__form__input" name='task_budget' />
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