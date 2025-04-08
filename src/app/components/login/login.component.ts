import { Component } from '@angular/core';
import { Credenciais } from '../../models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService){}

  logar(){
    this.toastr.error('Usuário ou senha inválidos!', 'Login');
    this.creds.email = '';
    this.creds.senha = '';

  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }

}
