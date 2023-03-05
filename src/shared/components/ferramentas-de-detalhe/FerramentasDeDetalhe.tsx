import { Box, Paper, useTheme, Button, Icon, Divider } from "@mui/material"

interface IFerramentasDeDetalhe {
    children: React.ReactNode
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhe> = ({ children }) => {
    const theme = useTheme()
    return (

        <Box
            gap={1}
            display="flex"
            padding={1}
            paddingX={2}
            alignItems="center"
            height={theme.spacing(5)}
            marginX={1}
            component={Paper}
        >
            <Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >Salvar
            </Button>
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >Salvar e Voltar
            </Button>
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>delete</Icon>}
            >Apagar
            </Button>
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>add</Icon>}
            >Novo
            </Button>
            
            <Divider variant='middle' orientation='vertical' />

            <Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
            >Voltar
            </Button>
        </Box>
    );

};