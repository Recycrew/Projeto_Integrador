/// <reference path="Usuario.ts" />"
import Usuario from './Usuario';


export default class Doador extends Usuario {

  private _dadosDoador = {
    nomeDoador: '',
    enderecoDoador: '',
    dataNasc: '',
    telefone: '',
    tipoPessoa: this.tipoPessoa
  }

  constructor( userName: string, senha: string, documento: string){
    super(userName, senha, documento);
  }

  buscarDoador(){

  }

  inserirDados(nomeDoador: string, enderecoDoador: string, dataNasc: string, telefone: string){
    this._dadosDoador.nomeDoador = nomeDoador;
    this._dadosDoador.enderecoDoador = enderecoDoador;
    this._dadosDoador.dataNasc = dataNasc;
    this._dadosDoador.telefone = telefone;
  }

  atualizarDoador(dados: any){
    this._dadosDoador = { ...this._dadosDoador, ...dados };
  }

  excluirDoador(){
    this._dadosDoador = {} as any;
  }

  calcularIdade(){
    const reversedDate = this._dadosDoador.dataNasc.split("/").reverse().join("/");
    const diff_ms = +new Date() - +new Date(reversedDate);
    const age = new Date(diff_ms);

    return Math.abs(age.getUTCFullYear() - 1970);
  }

  getEndereco(){
    return this._dadosDoador.enderecoDoador;
  }
}
