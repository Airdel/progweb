import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map } from 'jquery';
import { DoctorModel } from '../models/doctor.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }
//PROYECTO UNIDO
  crearDoctor(doctor: DoctorModel) {
    return this.http.post('https://empleados-eb8c5-default-rtdb.firebaseio.com/Doctores.json', doctor);  
}

  
 mostrarDoctor() {
    return this.http.get('https://empleados-eb8c5-default-rtdb.firebaseio.com/Doctores.json').pipe(
      map(this.crearArreglo)
    );
 }
  
  
    private crearArreglo(doctorObj: any){
    const usuarios: DoctorModel [] = [];
    //console.log(usuariosObj);
    if(doctorObj === null){
      return [];
    }
    Object.keys( doctorObj).forEach( key => {
      const usuario: DoctorModel = doctorObj[ key ];
      usuario.id = key;

      usuarios.push( usuario );
    });
    return usuarios;
    }
  //PROYECTO UNIDO
  agregarDoctor(doctor: any): Promise<any> {
    return this.firestore.collection('Doctores').add(doctor);
  }

  getDoctores(): Observable<any> {
    return this.firestore.collection('Doctores', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarDoctor(id: string): Promise<any> {
    return this.firestore.collection('Doctores').doc(id).delete();
  }

  getDoctor(id: string): Observable<any> {
    return this.firestore.collection('Doctores').doc(id).snapshotChanges();
  }

  actualizarDoctor(id: string, data:any): Promise<any> {
    return this.firestore.collection('Doctores').doc(id).update(data);
  }

  
  
}
