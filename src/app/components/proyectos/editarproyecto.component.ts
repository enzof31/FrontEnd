import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {
  proyec: Proyecto = null;
  constructor(private proyectoServ: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router 
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoServ.detail(id).subscribe(
      data=> {this.proyec = data
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoServ.update(id,this.proyec).subscribe(data=>{
        this.router.navigate(['']);
  }, err =>{
    alert("Error al modificar experiencia");
    this.router.navigate(['']);
  }
  )
  }

}
