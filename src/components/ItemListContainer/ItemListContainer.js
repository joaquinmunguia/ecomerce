import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { pedirDatos } from '../../helpers/PedirDatos'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = ( {} ) => {


    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProductos(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList items={productos}/>
            }
        </>
    )
}

