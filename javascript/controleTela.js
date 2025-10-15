class tela{
    constructor(){
        this.min_width = 800;
        this.min_heigth = 600;  
    }

    resizeWindom(){
        const windoWidth = window.innerWidth;
        const windoHeigth = window.innerHeight;

        const gameContainter = document.getElementById("telaJogo");

        if(windoHeigth<min_heigth || windoWidth<min_width){
            console.warn(`A tela esta muito pequena, Aumente para no minimo ${min_width}X${min_heigth}.`);
            alert(`A tela esta muito pequena, Aumente para no minimo ${min_width}X${min_heigth}.`);


        }else{
            gameContainter.innerHTML= "<canvas id='meuJogo'></canvas>";
            const canvas = document.getElementById('meuJogo');
            canvas.width = windoWidth;
            canvas.height = windoHeigth;
        }
        
        window.addEventListener('load',resizeWindom());
        window.addEventListener('resize',resizeWindom());
    }
}
