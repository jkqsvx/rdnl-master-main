import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuideView = ({description, price, img, id, title}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/guide/${id}`);
    };

    return (
        <div className='Card boxShadow' onClick={handleClick} style={{display: 'flex', flexDirection: 'row'}}>
            <img srcSet={img} alt="" style={{maxWidth: '200px'}}/>
            <div className="Card-description">
                <div className="Card-title">{title}</div>
                <div style={{color: 'grey', textAlign: 'center', fontWeight: 'bold', marginBottom: '8px'}}>{price}</div>
                <div className="Card-desc">{description}</div>
            </div>
        </div>
    );
};

export default GuideView;
