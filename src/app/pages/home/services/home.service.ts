import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  getNoticiasServices(){
    const url =`${environment.apiUrl}noticias`
    return this.http.get(url);

  }
}
