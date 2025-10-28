class controle{
  constructor(){
      this.teclado = false;
      this.gamePad = false;
      this.isAndroid = false;
      this.conexao();
  }

  conexao(){
    window.addEventListener("keydown",()=>{this.teclado = true;});
    window.addEventListener("gamepadconnected",()=>{this.gamePad=true;});
    window.addEventListener("gamepaddisconnected",()=>{this.gamePad=false});
    window.addEventListener("touchstart",()=>{this.isAndroid = true;},{once:true});
  }
  checkControl(){
      if(!this.teclado&&!this.gamePad){
          alert("Teclado ou gamepad não detectado");
      }else if(this.isAndroid){
          // Ativar gamepad virtual
      }
      
  }
}
