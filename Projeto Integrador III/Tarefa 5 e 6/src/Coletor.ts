/// <reference path="Usuario.ts" />"
import Usuario from './Usuario';


export default class Coletor extends Usuario {

  private _dadosColetor = {
    nomeColetor: '',
    especialidades: [] as string[],
    telefone: '',
    tipoPessoa: this.tipoPessoa
  }

  constructor(userName: string, password: string, documento: string){
    super(userName, password, documento);
  }

  atualizarColetor(dadosAtualizados: any){
    this._dadosColetor = { ...this._dadosColetor, ...dadosAtualizados }
  }

  excluirColetor(){
    this._dadosColetor = {} as any;
  }

  inserirColetor(nomeColetor: string, especialidades: string[], telefone: string){
    this._dadosColetor.nomeColetor = nomeColetor;
    this._dadosColetor.especialidades = especialidades;
    this._dadosColetor.telefone = telefone;
  }

  getNome(){
    return this._dadosColetor.nomeColetor;
  }

  getTelefone(){
    return this._dadosColetor.telefone;
  }
}