export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler icono-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list icono-menu"></i>
                </button>
                <a className="navbar-brand ms-2 icono-menu" href="#">Cafe y Sueños</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Pedidos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Historial de Entregas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-light">Cobros</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <img src="/img/img usuario.png" alt="Perfil" className="rounded-circle img-perfil" />
                    </div>
                </div>
            </div>
      </nav>
    )
}