export class Skill {
    id: number;
    nombre : string;
    porcentaje : number;
    circulo: boolean;

    constructor(nombre: string, porcentaje: number, circulo: boolean){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.circulo = circulo;
        
    }
}
