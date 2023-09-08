import './TaskList.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Task from '../../components/Task/Task';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {

    const [taskList, setTaskList] = useState([]);
    const API_URL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        axios.get(`${API_URL}/tasks`).then(response => {
            setTaskList(response.data)
        })

    }, [API_URL])


    return (
        <section className="tasklist-container margin-header">
            <ul className="tasklist">
                {taskList.map((task) => {
                    return (
                        <Link to={`/tasks/${task.task_id}`} className="tasklist__item" key={task.task_id}>
                            <Task task={task} />
                        </Link>
                    )
                })}
            </ul>

            <MapContainer className='map' center={taskList.length > 0 ? [taskList[0].latitude, taskList[0].longitude] : [51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {taskList.map((task) => (
                    <Marker position={[task.latitude, task.longitude]} key={task.task_id}>
                        <Popup className='popup'>
                            <p className="popup__heading">{task.title}</p>
                            <button className="popup__button">View Task</button>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section>
    )
}

export default TaskList;