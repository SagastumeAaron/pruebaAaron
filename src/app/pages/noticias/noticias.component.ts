import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasModel } from '../home/models/noticias.model';
import { HomeService } from '../home/services/home.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  loadNoticia = true;
  idNoticia = 0;

  noticias: NoticiasModel[] = []
  noticiaSelected: NoticiasModel = new NoticiasModel(0,'','');

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    ) {
    activatedRoute.params.subscribe((params) => {
      this.idNoticia = params.id; // Aca se asigma el valor del estudio obtenido en la ruta

    });
  }

  ngOnInit(): void {
    this.getNoticias();

  }

  getNoticias():void {
    this.homeService.getNoticiasServices().subscribe((res: any)=>{
      this.noticias = res;
      console.log(this.noticias)
      this.loadNotice(this.idNoticia)
    });
  }

  loadNotice(idNotice: number): void {
    if(idNotice !== null || idNotice != 'undefined' ) {
      const searchNoticia = this.noticias.find(element => element.id == idNotice);
      if (searchNoticia != null ) {
        this.noticiaSelected = searchNoticia;
        this.loadNoticia = false;
      }
      console.log(this.noticiaSelected);
    }

  
  }

}
