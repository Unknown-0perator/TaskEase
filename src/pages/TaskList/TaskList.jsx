import './TaskList.scss';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const TaskList = () => {
    return (
        <section className="tasklist-container">
            <ul className="tasklist">
                <li className="tasklist__item">
                    <div className="task">
                        <div className="task__header">
                            <p className="task__title">Help me with moving</p>
                            <p className="task__status">Open</p>
                        </div>
                        <div className="task__body">
                            <div className="task__detail-group">
                                <p className="task__label">Date</p>
                                <p className="task__info">Sun, Sep 17</p>
                            </div>
                            <div className="task__detail-group">
                                <p className="task__label">Location</p>
                                <p className="task__info">Surrey</p>
                            </div>
                            <div className="task__detail-group">
                                <p className="task__label">Type</p>
                                <p className="task__info">In-person</p>
                            </div>
                        </div>
                        <div className="task__footer">
                            <div className="task__user-profile-container"></div>
                            <div className="task__budget">$120</div>
                        </div>
                    </div>
                </li>
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