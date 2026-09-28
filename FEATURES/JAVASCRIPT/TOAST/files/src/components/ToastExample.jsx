import useToast from '../hooks/useToast'


// ============================================================
// COMPONENTE DE EJEMPLO: ToastExample
// ============================================================
// Muestra cómo usar el hook useToast para disparar
// notificaciones.
//
// Uso: colocalo donde quieras en tu app.
// ============================================================

const ToastExample = () => {
    const { success, error, info } = useToast()

    return (
        <div>
            <button onClick={() => success('Operación exitosa')}>
                Toast exitoso
            </button>
            <button onClick={() => error('Ocurrió un error')}>
                Toast de error
            </button>
            <button onClick={() => info('Información')}>
                Toast informativo
            </button>
        </div>
    )
}

export default ToastExample