import { createContext, useContext, useCallback, useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOption: IDrawerOption[];
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}
interface IDrawerProvider {
    children: React.ReactNode
}


interface IDrawerOption {
    label: string;
    icon: string;
    path: string;
}

export const DrawerProvider: React.FC<IDrawerProvider> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [drawerOption, setDrawerOption] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, []);

    const handlerSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOption(newDrawerOptions)
    }, []);


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOption, toggleDrawerOpen, setDrawerOptions: handlerSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
}