import { Location } from '@angular/common';
import { Component, createPlatform, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/users';
import { DbService } from '../../shared/services/db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  dbuser = "useer";
  signUpForm = new FormGroup({
    email:  new FormControl('',Validators.required),
    username:  new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required),
    
  });
  

  constructor(private location:Location,private authServ: AuthService,private dbservice:DbService,private router:Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    const repassword = this.signUpForm.get('repassword')?.value;
    const username = this.signUpForm.get('username')?.value;
    const firstName = this.signUpForm.get('name.firstname')?.value;
    const lastName = this.signUpForm.get('name.lastname')?.value;

    if (!email || !password || !username ) {
      window.alert('Kérjük töltsd ki az összes mezőt !');
      return;
    }

    if (this.signUpForm.get('password')?.value != this.signUpForm.get('repassword')?.value) {
      window.alert('Jelszavaid nem egyeznek');
      return;
    }

    console.log(this.signUpForm.value);
    this.authServ.signup(email, password).then(cred => {
      const user: User = {
        id: cred.user?.uid as string,
        email: email,
        username: username,
        
      };
      console.log(user);
      this.dbservice.createnewUser(user);
      window.alert('Sikeres regisztracio');
      this.router.navigateByUrl('home');
    }).catch(error => {
      window.alert("Valami hiba tortent");
      this.router.navigateByUrl("login");
      console.error(error);
    });
  }

  goBack(){
    this.location.back();
  }

  clearForm(){
    this.signUpForm.reset();
  }

}


