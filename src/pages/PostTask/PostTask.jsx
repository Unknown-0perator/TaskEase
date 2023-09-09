import './PostTask.scss';
import logo from '../../assets/logos/1.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import { OrDivider } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { useRef, useState } from 'react';
import axios from 'axios';
import { sideBarClick } from '../../utilities/utilities';
import { useNavigate } from 'react-router-dom';

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





const PostTask = ({ profileData }) => {



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
    const [flexibleCheckbox, setFlexibleCheckbox] = useState(false);
    const [remote, setRemote] = useState(false)
    const [type, setType] = useState('In-Person')




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

    }

    const API_URL = process.env.REACT_APP_BACKEND_URL;
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            title: taskPostForm.title,
            description: taskPostForm.description,
            budget: taskPostForm.budget,
            type: type,
            date: (taskPostForm.date ? Date.parse(taskPostForm.date) : null),
            time: (taskPostForm.time ? Date.parse(taskPostForm.time) : null),
            flexible: flexibleCheckbox,
            poster_id: profileData.user_id,
            posted_time: Date.now()
        }
        console.log(newTask)
        axios.post(`${API_URL}/tasks`, newTask).catch((e) => {
            console.log(e)
        })

        alert('task created successfully')
        setTaskPostForm('')
        event.target.reset();

    }



    return (
        <form onSubmit={handleFormSubmit}>
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
                    <div className="post-task__form" onSubmit={handleFormSubmit}>
                        <div className="post-task__form__group">
                            <label htmlFor="title" className="post-task__form__label">In a few words, what do you need done?</label>
                            <input onChange={handleInputChange} type="text" className="post-task__form__input" name='title' />
                        </div>
                        <div className="post-task__form__group">
                            <label htmlFor="date" className="post-task__form__label">When do you need this done?</label>
                            <div className="post-task__form__input-container">
                                <input disabled={flexibleCheckbox} onChange={handleInputChange} type="date" className="post-task__form__input post-task__form__input--half" name='date' />
                                <input disabled={flexibleCheckbox} onChange={handleInputChange} type="time" className="post-task__form__input post-task__form__input--half" name='time' />
                            </div>
                            <OrDivider />
                            <div className="post-task__form__checkbox">
                                <input onChange={(e) => {
                                    setFlexibleCheckbox(e.target.checked)
                                }} type="checkbox" name="task_flexible" id="remember_me" className='post-task__form__checkbox__input' />
                                <label htmlFor="remember_me" className='post-task__form__checkbox__label'>I am flexible</label>
                            </div>

                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            nextClick(refArray, locationRef, sideRefArray, sideLocationRef)
                        }} className="post-task__button post-task__button--submit">Next <img src={arrowIcon} alt="" className="button__icon" /></button>

                    </div>






                </div>



                {/* second */}

                <div className="post-task__container post-task__container--hidden" ref={locationRef}>
                    <div className="post-task__header">
                        <img src={logo} alt="" className="post-task__logo" />
                        <h3 className="post-task__heading">Location</h3>
                    </div>
                    <div className="post-task__form" >
                        <div className="post-task__form__group">
                            <label htmlFor="task_type" className="post-task__form__label">Type</label>
                            <select onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value === 'Remote') {
                                    setRemote(true)
                                    setType('Remote')
                                } else {
                                    setRemote(false)
                                    setType('In-Person')
                                }
                            }} name="task_type" id="" className='post-task__form__input'>
                                <option value="In-Person">In-Person</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                        <div className="post-task__form__group">
                            <label htmlFor="task_city" className="post-task__form__label">Where do you need this done?</label>

                            <input disabled={remote} onChange={handleInputChange} type="text" className="post-task__form__input" placeholder='City' name='task_city' />

                            <OrDivider />

                            <input disabled={remote} onChange={handleInputChange} type="text" className="post-task__form__input" placeholder='Postal Code' name='task_postal' />


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
                    </div>






                </div>


                {/* Third */}

                <div className="post-task__container post-task__container--hidden" ref={detailRef}>
                    <div className="post-task__header">
                        <img src={logo} alt="" className="post-task__logo" />
                        <h3 className="post-task__heading">Details</h3>
                    </div>
                    <div className="post-task__form" >
                        <div className="post-task__form__group">
                            <label htmlFor="description" className="post-task__form__label">What are the details</label>
                            <textarea onChange={handleInputChange} type="text" className="post-task__form__input post-task__form__input--textarea" name='description' />
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
                    </div>






                </div>

                {/* fourth */}

                <div className="post-task__container post-task__container--hidden" ref={budgetRef}>
                    <div className="post-task__header">
                        <img src={logo} alt="" className="post-task__logo" />
                        <h3 className="post-task__heading">Budget</h3>
                    </div>
                    <div className="post-task__form" >
                        <div className="post-task__form__group">
                            <label htmlFor="budget" className="post-task__form__label">What is your budget?</label>
                            <input onChange={handleInputChange} type="number" className="post-task__form__input" name='budget' />
                        </div>

                        <div className="post-task__button-container">
                            <button onClick={(e) => {
                                e.preventDefault();
                                backClick(refArray, detailRef, sideRefArray, sideDetailRef)
                            }} className="post-task__button post-task__button--cancel">Back</button>
                            <button className="post-task__button post-task__button--submit">Post the task <img src={arrowIcon} alt="" className="button__icon" /></button>
                        </div>
                    </div>






                </div>



            </div>
        </form>
    )

}

export default PostTask;