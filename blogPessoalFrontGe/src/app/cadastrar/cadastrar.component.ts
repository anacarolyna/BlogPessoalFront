import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

 user: User = new User
 confirmarSenha: string
 tipoUsuario: string

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  confirmaSenha(event: any){
    
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){

    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario
    if(this.user.senha != this.confirmarSenha) {
      alert('A senha não coincide! Confirme sua senha novamente.')
    }
    else {
      this.authService.cadastrar(this.user).subscribe((resp:User) => {
        this.user = resp
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }


}
