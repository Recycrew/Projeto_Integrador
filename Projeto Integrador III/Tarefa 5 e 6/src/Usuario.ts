class Usuario {
  private estadoLogin: boolean = false;
  protected tipoPessoa: string = '';
  constructor(
    private nomeUsuario: string,
    private senha: string,
    private documento: string
  ) {
    if(this.nomeUsuario && this.senha){
      this.estadoLogin = true;
    }

    if(this.documento.length === 11){
      this.tipoPessoa = 'PF'
    } else {
      this.tipoPessoa = "PJ"
    }
  }

  verifLogin(){
    return this.estadoLogin;
  }
}

export default Usuario;