import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  latitude: number;
  longitude: number;
  options: any;

  overlays: any[];
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {

    this.localizacaoAtual()

  }

  async localizacaoAtual(){
    await this.geolocation.getCurrentPosition().then((resp) => {
      console.log("teste", resp)
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
      console.log(this.latitude,this.longitude)
     }).then(()=>{
       this.carregaMapa()
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  
  carregaMapa(){
    this.options = {
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 12
  };
  }

}
