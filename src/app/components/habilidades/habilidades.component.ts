import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skill: Skill[] = [];


  constructor(private servSkill: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.servSkill.lista().subscribe(
      data=> {this.skill = data;})
  }

  delete(id: number){
    if(id != undefined){
      this.servSkill.delete(id).subscribe(
        data=> {
          this.cargarSkills();
        },err =>{
          alert("No se pudo borrar esa habilidad");
        }
      )
    }
  }

  
}


