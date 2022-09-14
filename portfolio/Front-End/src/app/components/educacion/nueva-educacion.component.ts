import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.scss']
})
export class NuevaEducacionComponent implements OnInit {
    nombreE: string;
    descripcionE : string;

  constructor(private eduServ: ServEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.eduServ.save(educacion).subscribe(
      data=>{this.router.navigate(['']);
    }, err=>{
      alert("fallo");
      this.router.navigate(['']);
    }
    )
  }

}
