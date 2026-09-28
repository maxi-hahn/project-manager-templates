import toast from 'react-hot-toast'


// ============================================================
// HOOK: useToast
// ============================================================
// Wrapper de react-hot-toast con métodos comunes.
//
// Uso:
//     const { success, error, info } = useToast()
//     success('Operación exitosa')
// ============================================================

const useToast = () => {
    return {
        success: (message) => toast.success(message),
        error: (message) => toast.error(message),
        info: (message) => toast(message),
        promise: (promise, messages) => toast.promise(promise, messages),
    }
}

export default useToast