import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardView = ({ description, price, img, id, title }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className='Card boxShadow' onClick={handleClick}>
            <img srcSet={img} alt={title} />
            <div className="Card-description">
                <div className="Card-title">{title}</div>
                <div style={{ color: 'grey', textAlign: 'center', fontWeight: 'bold', marginBottom: '8px' }}>{price}</div>
                <div className="Card-desc">{description}</div>
            </div>
        </div>
    );
};

export default CardView;
