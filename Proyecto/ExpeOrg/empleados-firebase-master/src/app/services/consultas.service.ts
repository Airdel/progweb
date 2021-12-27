
import { PacienteModel } from '../models/paciente.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private firestore: AngularFirestore) { }

  agregarConsultas(consulta: any): Promise<any> {
    return this.firestore.collection('Consultas').add(consulta);
  }

  getConsultas(): Observable<any> {
    return this.firestore.collection('Consultas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarConsulta(id: string): Promise<any> {
    return this.firestore.collection('Consultas').doc(id).delete();
  }

  getConsulta(id: string): Observable<any> {
    return this.firestore.collection('Consultas').doc(id).snapshotChanges();
  }

  actualizarConsulta(id: string, data:any): Promise<any> {
    return this.firestore.collection('Consultas').doc(id).update(data);
  }

}
