import './Tag.scss';

const Tag = ({ status, type }) => {
    if (type === 'application') {
        return (
            <p className={`tag-application tag-application--${status.toLowerCase()}`}>{status}</p>
        )
    }
    if (status) {
        return (
            <p className={`tag tag--${status.toLowerCase()}`}>{status}</p>
        )
    }



}

export default Tag;