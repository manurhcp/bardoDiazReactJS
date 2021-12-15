import "./Header.css"
function Header() {
    return (
    <header>
        <nav>
            
            <ul id="menu">
                 
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a>
                    <ul>
                        <li><a href="">Panes</a></li>
                        <li><a href="">Conservas</a></li>
                    </ul>  
                </li>
                <li><a href="">Entregas</a></li>
                <li><a href="">Contacto</a></li>
                
            </ul>
        
        </nav>
    </header>
    )
}

export default Header
