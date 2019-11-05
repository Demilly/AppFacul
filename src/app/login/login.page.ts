import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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

  }
}
