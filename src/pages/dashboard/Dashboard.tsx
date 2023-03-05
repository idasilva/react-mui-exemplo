import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
import { FerramentasDaListagem } from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem";
import { FerramentasDeDetalhe } from "../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina
            titulo="Página Inicial"
            barraDeFerramentas={(<FerramentasDeDetalhe>{}</FerramentasDeDetalhe>)}
        >Testando</LayoutBaseDePagina>
    );


};