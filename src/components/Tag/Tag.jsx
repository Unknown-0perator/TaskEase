import './Tag.scss';

const Tag = ({ type }) => {
    return (
        <p className={`tag tag--${type.lowerCase()}`}>{type}</p>
    )
}

export default Tag;