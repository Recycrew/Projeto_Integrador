import Coleta from "./Coleta";

interface IHistoricoColeta {
  numeroColeta: string;
  dataHoraColeta: string;
  nomeColetor: string;
  tipoMaterial: string;
  quantidadeMaterial: number;
}

class Historico {
  private coletas: IHistoricoColeta[] = [];
  
  gravar(numeroColeta: string, dataHoraColeta: string,  nomeColetor: string,  tipoMaterial: string, quantidadeMaterial: number){
    this.coletas = [...this.coletas, {
      numeroColeta,
      dataHoraColeta,
      nomeColetor,
      tipoMaterial,
      quantidadeMaterial
    }]
  }

  consultarHistorico(){
    return this.coletas;
  }
}

export const historico = new Historico();

