import { useEffect } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                path: "/pagina-inicial",
                label: "Páginal inicial"
            },            {
                icon: "start",
                path: "/pagina-secundária",
                label: "Páginal secundária"
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Teste</Button>}></Route>
            <Route path='*' element={<Navigate to="/pagina-inicial" />}></Route>
        </Routes>
    )
}