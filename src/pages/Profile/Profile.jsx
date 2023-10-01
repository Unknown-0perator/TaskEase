import './Profile.scss';
import profilePic from '../../assets/podmatch-GEnCnYhA1J4-unsplash.jpg';
import { useRef, useState, useEffect } from 'react';
import { sideBarClick } from '../../utilities/utilities';
import { displayDate } from '../../utilities/utilities';
import PostedTaskCard from '../../components/PostedTaskCard/PostedTaskCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApplicationTaskCard from '../../components/ApplicationTaskCard/ApplicationTaskCard';




const Profile = ({ isLoggedIn, profileData, API_URL }) => {



    const postedTaskRef = useRef();
    const applicationTaskRef = useRef();
    const sideBarPostTaskRef = useRef();
    const sideBarApplicationRef = useRef();

    const sideBarLinkArray = [sideBarApplicationRef, sideBarPostTaskRef]
    const pageArray = [postedTaskRef, applicationTaskRef]
    const [userTaskList, setUserTaskList] = useState([])
    const [applicationList, setApplicationList] = useState([])


    useEffect(() => {
        axios.get(`${API_URL}/tasks/user/${profileData.user_id}`).then(response => {
            setUserTaskList(response.data)
        })
        axios.get(`${API_URL}/tasks/user/${profileData.user_id}/offer`).then(response => {
            setApplicationList(response.data)
        })
    }, [API_URL, profileData.user_id])
    return (

        <section className="profile-container margin-header">
            <div className="profile">
                <div className="profile__details">
                    <div className="profile__header-container">
                        <div className="profile__img-container">
                            {profileData.user_image !== "" ? (
                                <img src={profilePic} alt="" className='profile__img' />
                            ) : (<></>)}
                        </div>

                        <p className="profile__name">{`${profileData.first_name} ${profileData.last_name}`}</p>


                        <p className="profile__location">{profileData.city}</p>
                        <p className="profile__member">{`Member since ${displayDate(profileData.timestamp)}`}</p>
                    </div>
                    <ul className="post-task__sidebar__list profile__navigation">
                        <li onClick={(e) => {
                            e.preventDefault();
                            sideBarClick(pageArray, postedTaskRef, sideBarLinkArray, sideBarPostTaskRef)
                        }} ref={sideBarPostTaskRef} className="post-task__sidebar__item post-task__sidebar__item--active"><a href="" className="post-task__sidebar__link">Posted Tasks</a> </li>
                        <li onClick={(e) => {
                            e.preventDefault();
                            sideBarClick(pageArray, applicationTaskRef, sideBarLinkArray, sideBarApplicationRef)
                        }} ref={sideBarApplicationRef} className="post-task__sidebar__item"><a href="" className="post-task__sidebar__link">Applications</a> </li>
                    </ul>
                </div>
                <div className="profile__task-container">
                    <ul className="profile__task-list profile__task-list--posted" ref={postedTaskRef}>
                        <h3 className="post-task__heading">Posted Tasks</h3>

                        {userTaskList ? (
                            userTaskList.map(task => {
                                return (
                                    <Link to={`/tasks/${task.task_id}`} className="profile__task-item" key={task.task_id}>
                                        <PostedTaskCard task={task} API_URL={API_URL} profileData={profileData} />
                                    </Link>
                                )
                            })) : (<p>You haven't posted any task</p>)}



                    </ul>

                    <ul className="profile__task-list  profile__task-list--application post-task__container--hidden" ref={applicationTaskRef}>
                        <h3 className="post-task__heading">Applications</h3>
                        {
                            applicationList.length !== 0 ? (
                                applicationList.map(task => {
                                    return (
                                        <Link to={`/tasks/${task.task_id}`} className="profile__task-item" key={task.task_id}>
                                            <ApplicationTaskCard task={task} />
                                        </Link>
                                    )
                                })) : (<p className='task-message'>You haven't applied to any task</p>)}

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Profile;