import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; //para poder usar RouterLink
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule, //para poder usar RouterLink
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ]
})
export class SharedModule { }