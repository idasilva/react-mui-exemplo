
import { Box, Button, TextField, Paper, useTheme, Icon } from "@mui/material"



interface IFerramentasDaListagem{
    textoDaBusca?: string;
    mostrarInputBusca?: boolean
    aoMudarTextoDaBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaonovo?: boolean
    aoCliclarEmNovo?: () => void;

}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDaBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaonovo = true,
    aoCliclarEmNovo,


}) => {
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
            { mostrarInputBusca && <TextField
                size="small"
                placeholder="Pesquisar..."
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
            ></TextField>
            }
            <Box
                flex={1}
                display="flex"
                justifyContent="end"
            >
                {mostrarBotaonovo && <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={aoCliclarEmNovo}
                    endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}
                </Button>
                }
            </Box>
        </Box>
    )
}