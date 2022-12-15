import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  skillHS: Skill = null;

  constructor(private servSkill: SkillService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servSkill.detail(id).subscribe(
      data=> {
        this.skillHS = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servSkill.update(id, this.skillHS).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar esa habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
