import Coletor from "./Coletor";
import Doador from "./Doador";

export default class Coleta {

  private _dadosColeta = {
    status: '',
    numeroColeta: '',
    dataHoraColeta: '',
    tipoMaterial: '',
    quantidadeMaterial: 0,
    nomeColetor: this.coletor.getNome(),
    telefoneColetor: this.coletor.getTelefone(),
    enderecoColeta: this.doador.getEndereco()
  }

  constructor(private coletor: Coletor, private doador: Doador) {}

  inserirColeta(tipoMaterial: string, qtdMaterial: number){
    this._dadosColeta.numeroColeta = String(Math.random() * 100);
    this._dadosColeta.dataHoraColeta = String(new Date());
    this._dadosColeta.tipoMaterial = tipoMaterial;
    this._dadosColeta.quantidadeMaterial = qtdMaterial;
    this._dadosColeta.status = "Em andamento";
  }

  private concluirColeta(){
    this._dadosColeta.status = "Concluido";
  }

  private cancelarColeta(){
    this._dadosColeta.status = "Cancelado";
  }

  private excluirColeta(){
    this._dadosColeta = {} as any;
  }

  getDadosColeta(){
    return {
      numeroColeta: this._dadosColeta.numeroColeta,
      dataHoraColeta: this._dadosColeta.dataHoraColeta,
      tipoMaterial: this._dadosColeta.tipoMaterial,
      quantidadeMaterial: this._dadosColeta.quantidadeMaterial
    }
  }

}