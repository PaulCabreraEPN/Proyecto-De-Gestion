export default function Anuncio({guitar, setCart}){

    const {id, image, description} = guitar
    return(
        <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <img src={`/imagenes/${image}.png`}  className="rounded-circle me-3 img-perfil" />
                <div className="flex-grow-1">
                  <h6 className="mb-0">{description}</h6>
                </div>
                <div>
                  <small className="text-muted">21/07/2024</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}