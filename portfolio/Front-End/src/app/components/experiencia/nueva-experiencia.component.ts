import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreE : string = '';
  descripcionE : string = '';

  constructor(private servExperiencia: ServExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.servExperiencia.save(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    } 
    )
  }
}
