
import React from 'react'
import { Container, Row} from 'react-bootstrap'
import { Item } from '../Item/Item'
import './ItemList.scss';
import { Loader } from '../Loader/Loader';

export const ItemList = ({items}) => {

    return (
        <Container className="my-5">
            
            <h2 className='h2' >Productos</h2>
            <hr/>
            <Row>
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
            
        </Container>
    )
}