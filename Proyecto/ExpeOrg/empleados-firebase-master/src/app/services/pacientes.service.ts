import { PacienteModel } from '../models/paciente.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private firestore: AngularFirestore) { }

  agregarPaciente(paciente: any): Promise<any> {
    return this.firestore.collection('Pacientes').add(paciente);
  }

  getPacientes(): Observable<any> {
    return this.firestore.collection('Pacientes', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarPaciente(id: string): Promise<any> {
    return this.firestore.collection('Pacientes').doc(id).delete();
  }

  getPaciente(id: string): Observable<any> {
    return this.firestore.collection('Pacientes').doc(id).snapshotChanges();
  }

  actualizarPaciente(id: string, data:any): Promise<any> {
    return this.firestore.collection('Pacientes').doc(id).update(data);
  }

}
