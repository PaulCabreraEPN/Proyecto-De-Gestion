export default function Filtros(){
    return(
        <div className="d-flex justify-content-around mt-4">
        <div className="btn-group">
          <button type="button" className="btn btn-primary btn-lg text-dark" data-bs-toggle="dropdown" aria-expanded="false">
            Fecha<i className="bi bi-caret-down-fill"></i>
          </button>
        </div>

        <div className="btn-group ms-2">
          <button type="button" className="btn btn-primary btn-lg text-dark" data-bs-toggle="dropdown" aria-expanded="false">
            Prioridad<i className="bi bi-caret-down-fill"></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Urgente</a></li>
            <li><a className="dropdown-item" href="#">No urgente</a></li>
          </ul>
        </div>

        <div className="btn-group ms-2">
          <button type="button" className="btn btn-primary btn-lg text-dark" data-bs-toggle="dropdown" aria-expanded="false">
            Ubicacion<i className="bi bi-caret-down-fill"></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Norte</a></li>
            <li><a className="dropdown-item" href="#">Centro</a></li>
            <li><a className="dropdown-item" href="#">Sur</a></li>
          </ul>
        </div>
      </div>
    )
}