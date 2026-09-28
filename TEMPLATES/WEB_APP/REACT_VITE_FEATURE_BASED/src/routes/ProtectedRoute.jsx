import { Navigate } from 'react-router-dom'


// ============================================================
// PROTECTED ROUTE
// ============================================================
// Envuelve rutas que requieren autenticación.
//
// Por defecto: deja pasar a todos (placeholder).
// Modificar cuando tengas sistema de auth.
//
// Uso:
//     <Route path="/dashboard" element={
//         <ProtectedRoute>
//             <Dashboard />
//         </ProtectedRoute>
//     } />
// ============================================================

const ProtectedRoute = ({ children }) => {
    // TODO: reemplazar con la lógica real de autenticación.
    const isAuthenticated = true

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute