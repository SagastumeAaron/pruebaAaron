import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramaModel, RegistroModel } from './models/registro.model';
import { RegistroService } from './services/registro.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registro: RegistroModel = new RegistroModel('', '', '', 0,'','');
  programas: ProgramaModel[] = []; // Declaramos un Array
  basicForm: any ;

  constructor(
    private registros: RegistroService,
  ) { }

  ngOnInit(): void {

    this.getProgramas();

    this.basicForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      family_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(9)]),
      program: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.basicForm.valid);

    if (this.basicForm.invalid) {
      return;
    }

      (this.registro.name = this.basicForm.value.name),
      (this.registro.family_name = this.basicForm.value.family_name),
      (this.registro.email = this.basicForm.value.email),
      (this.registro.phone = this.basicForm.value.phone),
      (this.registro.program = this.basicForm.value.program),
      (this.registro.comment = this.basicForm.value.comment),
      // (this.usuario.companyId = this.basicForm.value.companyId),}
      // (this.registro.program = parseInt( this.basicForm.value.companyId)),
    console.log(this.registro);

    this.registros.nuevoRegistroService(this.registro).subscribe((resp) => {
      console.log(resp);
      Swal.fire('Registro', 'Registrado exitosamente','success')
    });
  }


  getProgramas(): void {
    this.registros.getProgramaServices().subscribe((res: any) => {
      this.programas = res;
      console.log(this.programas);      
    });
  }
}
