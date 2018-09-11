export class Carro {
    tanque: number;
    capacidade: number;
    km: number;

    constructor() {
        this.tanque = 0;
        this.capacidade = 0;
        this.km = 0;
    }

    abastecer(encher : number): void {
        if ((this.tanque + encher) <= 10){
            this.tanque += encher;
        } else {
            this.tanque +=10;
        }
    }

    embarcar(pessoa : number){
        if((this.capacidade + pessoa) <=2){
        this.capacidade += pessoa;
        } else {
            console.log("A capacidade de pessoas no carro esta no limite");
        }
    }

    desembarcar(pessoa : number){
        if(this.capacidade >= pessoa){
            this.capacidade -= pessoa;
        }else{
            console.log("Impossivel desembarcar essa quantidade, pois nao existe");
        }
    }

    andar(distancia : number){
        if(this.capacidade >= 1 && this.tanque >=(distancia/10)){
            if(distancia == 10){
                this.tanque -=10;
                this.km += 1;
            }else{
                console.log("Impossível andar, pois não ha combustivel suficiente");
            }            
        }
    }


}





















