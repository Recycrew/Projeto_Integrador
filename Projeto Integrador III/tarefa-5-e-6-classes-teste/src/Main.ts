import Coleta from "./Coleta";
import Coletor from "./Coletor";
import Doador from "./Doador";
import { historico } from "./Historico";

// Criação dos usuários, Doador e Coletor, e login direto..
const doador = new Doador("joazinhodoador", "a1s2d3", "77220323891");
const coletor = new Coletor("pedrocoletor", "coleta123", "81076506000186");

// Cadastro de informações dos usuários criados
doador.inserirDados("João Pedro", "Rua dos Alfeneiros, nº 4", "22/10/1975", "61996874936");
coletor.inserirColetor("Pedro Batista", ["Metais", "Plasticos"], "61996874935");

// Gerando coleta, match entre coletor e doador
const coleta = new Coleta(coletor, doador);

// Criando coleta
coleta.inserirColeta("Metal", 100);

// Registrando a solicitação no historico
const { dataHoraColeta, numeroColeta, quantidadeMaterial, tipoMaterial} = coleta.getDadosColeta();
historico.gravar(numeroColeta, dataHoraColeta, coletor.getNome(), tipoMaterial, quantidadeMaterial);

// Mostra o historico de coletas
console.table(historico.consultarHistorico());