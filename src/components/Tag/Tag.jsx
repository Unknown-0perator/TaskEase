import './Tag.scss';

const Tag = ({ type }) => {
    return (
        <p className={`tag tag--${type.toLowerCase()}`}>{type}</p>
    )
}

export default Tag;