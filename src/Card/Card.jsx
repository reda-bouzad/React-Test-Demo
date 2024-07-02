import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ id, image, title, text }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`); 
    };

    return (
        <div className="my-card row-container" onClick={handleClick}>
            <img src={image} alt="" />
            <div className="column-container">
                <p className='title'>{title}</p>
                <span>{text}</span>
                <div className="btn-container">
                    <button className="btn">read more</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
