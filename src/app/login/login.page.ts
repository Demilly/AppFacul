import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { CredenciaisDTO } from '../models/credenciais.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };


  private formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private toastCtrl: ToastController

  ) { 
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  logar()
  {
    console.log(this.creds);
    if (this.formLogin.value.email == "admin@admin.com" && this.formLogin.value.senha == "123"){
        window.localStorage.setItem("logado", "sim")
        this.navCtrl.navigateRoot("home")

    }
    else {

      this.presentToast()
    }
  
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Dados de login incorretos.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
}
