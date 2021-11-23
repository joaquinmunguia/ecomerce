import React , {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


export const Item = ({id, name, img, cantidad, price, category}) => {

  const navigate = useNavigate()

  const handleVolver = () => {
      navigate(-1)
  }

  const handleVolverInicio = () => {
      navigate('/')
  }
   
 const [counter, setCounter] = useState(1);

  const incrementar = () => {
    if (cantidad > counter) {
      setCounter(counter + 1);
    } else {
      alert("No hay mas stock!");
    }
  };

  const onRemove = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No se pueden quitar mas productos!");
    }
  };

  const respuesta = () => {
    alert(`Agregaste ${counter}`)
  }


    return (
        <article key={id} className="card m-3" style={{width: "18rem"}}>
        <img src={img} alt={name}/>
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">stock: {cantidad}</p>
            <p className="card-text">{category}</p>
            <Link to={`/detail/${id}`} className="btn btn-primary">Ver más</Link>      
            <h1>{counter}</h1>
     
      <Button variant="primary" onClick={onRemove}>
        -
      </Button>
      
      <Button  variant="primary" onClick={incrementar}>
        +
      </Button>
      <Button variant="secondary" size="lg" onClick={respuesta}>
        Agregar al carrito
      </Button>
      <div>
        <Button className="btn btn-primary" onClick={handleVolver}>Volver</Button>
        <Button className="btn btn-primary" onClick={handleVolverInicio}>Volver al inicio</Button>
     </div>
      
        </div>

    </article>
    
    )
}

