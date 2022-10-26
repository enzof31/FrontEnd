import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca/edit-acercade.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarproyectoComponent } from './components/proyectos/editarproyecto.component';
import { NuevoproyectoComponent } from './components/proyectos/nuevoproyecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExperienciaComponent},
  {path: 'editexp/:id', component: EditarExperienciaComponent},
  {path: 'nuevaeduc', component: NuevaEducacionComponent},
  {path: 'editeduc/:id', component: EditarEducacionComponent},
  {path: 'newhab', component: NuevaHabilidadComponent},
  {path: 'edithab/:id', component: EditHabilidadesComponent},
  {path: 'editarAcercade/:id', component: EditAcercadeComponent},
  {path: 'nuevoproyec', component: NuevoproyectoComponent},
  {path: 'editproyec/:id', component: EditarproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
