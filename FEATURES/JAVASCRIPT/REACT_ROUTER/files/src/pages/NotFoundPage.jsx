import { Link } from 'react-router-dom'


const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default NotFoundPage