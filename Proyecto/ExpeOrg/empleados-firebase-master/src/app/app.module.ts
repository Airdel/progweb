import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegistroComponent1 } from './pages/registro1/registro1.component';
import { Registro2Component } from './pages/registro2/registro2.component';
import { Login1Component } from './pages/login1/login1.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { FirebaseService } from './services/firebase.service';


// Moudulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Componente
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { Login2Component } from './pages/login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    LoginComponent,
    ForgetPassComponent,
    AboutUsComponent,
    RegistroComponent,
    SearchComponent,
    RegistroComponent1,
    Registro2Component,
    Login1Component,
    TransparenciaComponent,
    PruebaComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
