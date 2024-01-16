import { szenvedoMondatok } from "./angol";
export default class Modulsor{
    #sor = [];
    #index = 2;
    #obj = {};
    constructor(){
        this.#sor = szenvedoMondatok;
        this.#obj = this.#sor[this.index];
    }
    Cim(){
         return this.#sor[0]; 
    }
    Sugo(){
        return this.#sor[1];
    }
    tagolas(){
        let sor = this.#sor[this.#index].mondat;
        let txt = sor.split("_");
        return txt
    }
    getAlap(){
        return this.#sor[this.#index].alap;
    }
    setIndex(index){
        this.#index = index
        this.#obj = this.#sor[this.#index]
    }
    getIndex(){
        return this.#index
    }    
    getHelyes(){
        return this.#sor[this.#index].valasztas[0]
    }
}