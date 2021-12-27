import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component'
import { LoginComponent } from './pages/login/login.component'
import { Login1Component } from './pages/login1/login1.component'
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component'
import { AboutUsComponent } from './pages/about-us/about-us.component'
import { RegistroComponent } from './pages/registro/registro.component'
import { SearchComponent } from './pages/search/search.component';
import { RegistroComponent1 } from './pages/registro1/registro1.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { Registro2Component } from './pages/registro2/registro2.component';
import { Login2Component } from './pages/login2/login2.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'prueba',component:PruebaComponent},  
  {path: 'inicio',component:InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'login1', component: Login1Component },
  { path: 'login2', component: Login2Component },
  { path: 'forgetpass/:id', component: ForgetPassComponent },
  {path: 'forgetpass',component:ForgetPassComponent},
  { path: 'aboutus', component: AboutUsComponent },
  {path: 'transparent',component:TransparenciaComponent},
  { path: 'register', component: RegistroComponent},
  { path: 'register1', component: RegistroComponent1 },
  { path: 'register2', component: Registro2Component },
  { path: 'search', component: SearchComponent },
   { path: 'search/:id', component: SearchComponent },
  { path: 'editConsulta/:id', component: Registro2Component },
  { path: 'editPaciente/:id', component: RegistroComponent1 },
  {path: '**',pathMatch: 'full',redirectTo: 'inicio'}
];

@NgModule({
imports: [RouterModule.forRoot(routes),BrowserModule, FormsModule],
exports: [RouterModule],
})
export class AppRoutingModule { }
