import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from "react-bootstrap";

export const ItemDetail = ({id, name, img, desc, price, category}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>
            <p>categoria : {category}</p>

           

            <Button className="btn btn-primary" onClick={handleVolver}>Volver</Button>
            <Button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</Button>
        </div>
    )
}