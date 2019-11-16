// import React from "react";
import React from "react";
import "./style.css";
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container'


// role = "img" aria-label = "click item"

function
    Card(props) {
    return (
                    <img src={props.src} alt={props.alt} onClick={() => props.handleclick(props.clicked, props.id)} />
    );
};




export default Card;
