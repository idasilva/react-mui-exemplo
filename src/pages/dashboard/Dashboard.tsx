import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
import { FerramentasDaListagem } from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina
            titulo="Página Inicial"
            barraDeFerramentas={<FerramentasDaListagem
            mostrarInputBusca
            textoBotaoNovo= "Novo 2"
            ></FerramentasDaListagem>}
        >Testando</LayoutBaseDePagina>
    );


};