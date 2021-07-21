import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Local } from '../domain/local';
import { LocalesService } from '../services/locales.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  ciudad: string;
  precio: any;

  local: Local = new Local();

  locales: any;

  constructor(private route: ActivatedRoute, 
      private localService: LocalesService) { 

    route.queryParams.subscribe(params => {
      console.log(params)
      this.ciudad = params.ciudad
      this.precio = params.precio
    })

  }
    
  ngOnInit() {
    this.locales = this.localService.getLocales();
  }

  guardar(){
    console.log(this.local);
    this.localService.save(this.local);
  }

}
