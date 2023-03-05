import {
    Avatar,
    Divider,
    Drawer,
    ListItemButton,
    useTheme,
    List,
    Icon,
} from "@mui/material"

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Box } from "@mui/system"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppThemeContext, useDrawerContext } from "../../contexts";

import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";


interface IMenuLateral {
    children: React.ReactNode
}

interface IListItemLink {
    children: React.ReactNode
    label: string;
    icon: string;
    to: string;
    onClick: (() => void) | undefined;
}


const ListItemLink: React.FC<IListItemLink> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false })

    const handlerClick = () => {
        navigate(to);
        onClick?.();
    }

    return (

        <ListItemButton selected={!!match} onClick={handlerClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )

}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOption } = useDrawerContext()
    const { toggleTheme } = useAppThemeContext()

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box
                    width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={
                                {
                                    height: theme.spacing(12), width: theme.spacing(12)
                                }
                            }
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fnaruto-shippuden%2F83680%2Ffeature%2Fquiz-de-naruto-qual-versao-do-naruto-voce-seria&psig=AOvVaw2tgSSSF62nLsCtoROmJFD8&ust=1678052586833000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCq0ZSfw_0CFQAAAAAdAAAAABAI" />
                    </Box>
                    <Divider></Divider>

                    <Box flex={1}>
                        <List component="nav">
                            {
                                drawerOption.map(drawerOpt => (
                                    <ListItemLink
                                        key={drawerOpt.path}
                                        to="/paginal-inicial"
                                        icon={drawerOpt.icon}
                                        label={drawerOpt.label}
                                        onClick={smDown ? toggleDrawerOpen : undefined}
                                    >
                                    </ListItemLink>
                                ))}
                        </List>
                    </Box>
                    <Box>
                        <List component="nav">
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>dark_mode</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Alternar tema" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}