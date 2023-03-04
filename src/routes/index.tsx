import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/pagina-inicial' element={<p>Páginal Inicial</p>}></Route>
            <Route path='*' element={<Navigate to="/paginal-inicial"></Navigate>}></Route>
        </Routes>
    )
}