import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    NoticiasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [

  ]
})
export class PagesModule { }
