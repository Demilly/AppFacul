import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 

    slideOpts = {
      initialSlide: 1,
      speed: 400
    };

  constructor(
    private navCtrl: NavController
  ) {

  }

  ngOnInit(): void {
    console.log("teste")
    if(window.localStorage.getItem("logado")== "nao"){
      
        this.navCtrl.navigateRoot("login")
    }
  }
  
  sair(){
    this.navCtrl.navigateRoot("login").then(() => {
      window.localStorage.setItem("logado", "nao")
    })
  }

}
