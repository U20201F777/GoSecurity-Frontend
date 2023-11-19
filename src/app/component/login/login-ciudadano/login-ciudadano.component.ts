import { Component } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtRequest } from 'src/app/model/jwtRequest';

@Component({
  selector: 'app-login-ciudadano',
  templateUrl: './login-ciudadano.component.html',
  styleUrls: ['./login-ciudadano.component.css']
})
export class LoginCiudadanoComponent {
  constructor(private LoginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }
  username: string = ""
  password: string = ""
  mensaje: string = ""
  ngOnInit(): void {
  }
  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.LoginService.login(request).subscribe((data: any) => {
      sessionStorage.setItem("token", data.jwttoken);
      this.router.navigate(['components/Ayuda']);
    }, error => {
      this.mensaje = "Credenciales incorrectas!!!"
      this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
    });
  }
}
