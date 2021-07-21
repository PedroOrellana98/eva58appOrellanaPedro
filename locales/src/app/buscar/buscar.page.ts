import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  public locales: any;
  public localesBackup: any;

  async ngOnInit() {
    this.locales = await this.initializeItems();
  }
  
  async initializeItems(): Promise<any> {
    const locales = await this.firestore.collection('locales')
      .valueChanges().pipe(first()).toPromise();
    this.localesBackup = locales;
    return locales;
  }

  async filterList(evt) {
    this.locales = await this.initializeItems();
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.locales = this.locales.filter(local => {
      if (local.ciudad && searchTerm) {
        return (local.ciudad.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || local.direccion.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
