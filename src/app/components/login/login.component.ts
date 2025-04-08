import { Component } from '@angular/core';
import { Credenciais } from '../../models/credenciais';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }

}
