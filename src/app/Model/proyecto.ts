export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    img: string;
    fecha: string;

    constructor(nombre: string, descripcion: string, img: string, fecha: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.fecha = fecha;
    }
}
