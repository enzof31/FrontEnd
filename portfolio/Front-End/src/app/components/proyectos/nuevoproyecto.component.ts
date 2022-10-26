import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {
  nombre : string = '';
  descripcion : string = '';
  img : string = '';
  fecha : string= '';
  
  constructor(
    private proyectoServ: ProyectoService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void {
  
  const proyecto = new Proyecto(this.nombre, this.descripcion, this.img, this.fecha);
  this.proyectoServ.save(proyecto).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    } 
    )
}
}
