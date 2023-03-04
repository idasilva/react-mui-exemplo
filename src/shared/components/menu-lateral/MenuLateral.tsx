import {
    Avatar,
    Divider,
    Drawer,
    ListItemButton,
    useTheme,
    List,
} from "@mui/material"

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';



import { Box } from "@mui/system"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDrawerContext } from "../../contexts";


interface IMenuLateral {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext()

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
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height={"100vh"} marginLeft={smDown ? 0: theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}