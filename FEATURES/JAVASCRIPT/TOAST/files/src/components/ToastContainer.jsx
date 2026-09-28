import { Toaster } from 'react-hot-toast'


// ============================================================
// COMPONENTE: ToastContainer
// ============================================================
// Contenedor global de notificaciones toast.
//
// Debe colocarse una vez en App.jsx:
//
//     <ToastContainer />
// ============================================================

const ToastContainer = () => {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
            }}
        />
    )
}

export default ToastContainer