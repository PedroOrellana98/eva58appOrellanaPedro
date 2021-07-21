import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Local } from '../domain/local';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(public afs: AngularFirestore) { }

  save(local: Local){
    const refLocales = this.afs.collection("locales");

    if(local.uid == null){
      local.uid = this.afs.createId();
    }

    refLocales.doc(local.uid).set(Object.assign({}, local));
  }

  getLocales(): Observable<any[]>{
    return this.afs.collection("locales"
    ).valueChanges();
  }
}