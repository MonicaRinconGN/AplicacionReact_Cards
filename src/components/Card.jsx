import React from "react";
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ lang, img, fcolor, scolor}) => {
    return (
        //agregando los estilos
        <div className="card" style={{background: `linear-gradient(to left, ${fcolor}, ${scolor})`}}>
            <img src={img} alt="lang.svg"/>
            <h3>{lang}</h3>
        </div>
    );
};

//definiendo los prototypes de card
Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
};

export default Card;