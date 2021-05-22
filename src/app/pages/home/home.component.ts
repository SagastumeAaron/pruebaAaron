import { Component, OnInit } from '@angular/core';
import { NoticiasModel } from './models/noticias.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticias: NoticiasModel[] = []

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getNoticias()
  }

  getNoticias():void {
    this.homeService.getNoticiasServices().subscribe((res: any)=>{
      this.noticias = res;
      console.log(this.noticias)
    });

  }

}
