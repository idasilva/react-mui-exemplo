import { useEffect } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDrawerContext } from '../shared/contexts'
import { Dashboard } from '../pages/dashboard/Dashboard'

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                path: "/pagina-inicial",
                label: "Páginal inicial"
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard></Dashboard>}></Route>
            <Route path='*' element={<Navigate to="/pagina-inicial" />}></Route>
        </Routes>
    )
}