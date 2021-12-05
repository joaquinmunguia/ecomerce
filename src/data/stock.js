import zapatilla from '../data/fotos/Zapatillas_Galaxy_5_Negro.jpg';
import buzo from '../data/fotos/buzo.jpg';
import remera from '../data/fotos/remera.jpg';

export const stock = [
    {
        id: 1,
        price: 15000,
        name: "Zapatilla Galaxy 5 Negra",
        desc: "Zapatilla en todos los talles del 38 al 45",
        stock: 4,
        img:  zapatilla,
        category: 'zapatillas'
    },
    {
        id: 2,
        price: 3000,
        name: "Buzos Adidas",
        desc: "Tenemos el buzo en los talles del S a XL",
        stock: 6,
        img: buzo,
        category: 'buzos'
    },
    {
        id: 3,
        price: 1500,
        name: "Remera Adidas",
        desc: "Tenemos en todos los talles del S a XL",
        stock: 2,
        img: remera,
        category: 'remeras'
    }


]