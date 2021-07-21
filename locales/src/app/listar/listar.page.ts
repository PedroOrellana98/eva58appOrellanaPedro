import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LocalesService } from '../services/locales.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private route: ActivatedRoute, 
    private localService: LocalesService,
    private router:Router) { }

  locales: any;

  ngOnInit() {
    this.locales = this.localService.getLocales();
  }

  editar(local: any){
    let params: NavigationExtras = {
      queryParams: {
        local: local
      }
    }

    this.router.navigate(["/buscar"], params)
  }

  navCrear(){
    this.router.navigate(["/buscar"])
  }

  contador = 0;

  update(cnt : any){
    console.log(cnt)
    this.contador = cnt
  }
}
