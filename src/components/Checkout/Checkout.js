import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../Firebase/generarOrden'
import { Formik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'Demasiado corto')
                .max(20, 'Demasiado largo'),
    apellido: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'Demasiado corto')
                .max(20, 'Demasiado largo'),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Email inválido')
})

export const Checkout = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const initialValues =  {
        nombre: '',
        apellido: '',
        email: ''
    }

    return (

        <>
            {carrito.length === 0 
                ? <Navigate to="/"/>
                :
                    <div className="container my-5">
                        <h2>Resumen de compra</h2>
                        <hr/>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={ (values) => {
                                generarOrden(values, carrito, totalCompra, vaciarCarrito)
                            }}
                        >
                            {(formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        onChange={formik.handleChange}
                                        name="nombre"
                                        value={formik.values.nombre}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="nombre"
                                    />
                                    {formik.errors.nombre && <small>{formik.errors.nombre}</small>}

                                    <input
                                        onChange={formik.handleChange}
                                        name="apellido"
                                        value={formik.values.apellido}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="apellido"
                                    />
                                    {formik.errors.apellido && <small>{formik.errors.apellido}</small>}

                                    <input
                                        onChange={formik.handleChange}
                                        name="email"
                                        value={formik.values.email}
                                        className="form-control my-2"
                                        type="email"
                                        placeholder="email"
                                    />
                                    {formik.errors.email && <small>{formik.errors.email}</small>}

                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            )}
                        </Formik>

                    </div>
            }
        </>
    )
}




// import React, {useContext, useState} from 'react';
// import { Navigate } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import {db} from '../../Firebase/config';
// import {validarDatos } from '../../helpers/validarDatos';
// import {collection, Timestamp, writerBarch, query, where, documentId, getDocs, addDoc} from 'firebase/firestore';
// import Swal from 'sweetalert2';



// export const Checkout = () => {

//     const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext);
//     const [values, setValues] = useState({
//         nombre: '',
//         apellido: '',
//         email: '',
//         emailConfirm:''
//      })


//      const handleInputChange = (e) => {
//          setValues({
//              ...values,
//              [e.target.name]: e.target.value

//          })

//      }

//      const handleSubmit = async (e) => {
//         e.preventDefault()
//         if (!validarDatos(values)) 
//         {return}
//       }

    
//       const orden = {
//           buyer: {...values},
//           items: carrito,
//           total: totalCompra(),
//           date: Timestamp.fromDate(new Date())
//       }

//       const batch= writerBarch(db)


    
//       const ordersRef = collection(db, "orders")

//       const productosRef = collection (db,"productos")
      
//       const q =query(productosRef,where(documentId(),'in', carrito.map(el => el.id)))

//       const outOfStock = []

//       const productos = await getDocs(q)

//       productos.docs.forEach((doc) => {

//         const itemToUpdate = carrito.find((prod) => prod.id === doc.id)

//             if (doc.data().stock >= itemToUpdate.cantidad) {

//                  batch.update(doc.ref, {
//                     stock: doc.data().stock - itemToUpdate.cantidad
//                 })


//         }   else {
//                 outOfStock.push(itemToUpdate)
//          }
//         })


//     if (outOfStock.length === 0) {
//         addDoc(ordersRef, orden)

//         .then((res) => {
//             batch.commit()
//             Swal.fire({
//                 icon:'success',
//                 title: 'Ya fue registada su orden',
//                 text: `Su numero de orden es: ${res.id}`
                
//             })
//         vaciarCarrito()

//         })
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title:'No hay stock de los siguientes productos: ',
//             text: outOfStock.map(el => el.name).join(', ')
//         })
//     }
// }



//     return (
//         <>
//         {carrito.length === 0
        
//             ?<Navigate to="/"/>
//             :
//                 <div className='container my-5'>
//                     <h2>Resumen de compra</h2>
//                     <hr/>

//                 <form onSubmit={handleSubmit}>
//                     <input
//                         onChange={handleInputChange}
//                         name='nombre'
//                         value={values.nombre}
//                         className='form-control my-3'
//                         type="text"
//                         placeholder='nombre'                    
//                     />
//                     <input
//                         onChange={handleInputChange}
//                         name='apellido'
//                         value={values.apellido}
//                         className='form-control my-3'
//                         type="text"
//                         placeholder='apellido'                    
//                     />
//                     <input
//                         onChange={handleInputChange}
//                         name="email"
//                         value={values.email}
//                         className='form-control my-3'
//                         type="text"
//                         placeholder='email'                    
//                     />
//                     <input
//                         onChange={handleInputChange}
//                         name='emailConfirm'
//                         value={values.emailConfirm}
//                         className='form-control my-3'
//                         type="text"
//                         placeholder='emailConfirm'                    
//                     />

//                 {values.emailConfirm !== values.email && <small>Email no coincide</small>}
//                 <button type="submit" className='btn btn-primary'>Enviar</button>

//                 </form>
//         </div>
        
        
        
//         }
        
        
        
        
        
//         </>




//     )


