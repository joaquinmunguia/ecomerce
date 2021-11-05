import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className="header">
        <h1>Logo</h1>

        <nav>
            <ul>
                <li>Home</li>
                <li>Ventas</li>
                <li>ubicacion</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    )
}