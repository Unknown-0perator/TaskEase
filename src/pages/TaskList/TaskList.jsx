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
        axios.get(`${API_URL}/task`).then(response => {
            setTaskList(response.data)
        })
    }, [API_URL])


    return (
        <section className="tasklist-container">
            <ul className="tasklist">
                {taskList.map((task) => {
                    return (
                        <Link to={`/tasks/${task.id}`} className="tasklist__item" key={task.id}>
                            <Task task={task} />
                        </Link>
                    )
                })}



            </ul>
            <MapContainer className='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </section>
    )
}

export default TaskList;