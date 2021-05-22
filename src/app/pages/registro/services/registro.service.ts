import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RegistroModel } from '../models/registro.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private http: HttpClient) { }


  nuevoRegistroService( registro: RegistroModel){
    return this.http.post(`${environment.apiUrl}registro`, registro).pipe(
      map((resp: any) => {
        return true;
      }),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      }));
  }


  getProgramaServices(){
    const url = `${environment.apiUrl}programas`
    return this.http.get(url);
  }
}
