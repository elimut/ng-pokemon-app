import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  message: string = 'Vous êtes déconnecté.';
  name: string;
  password: string;
  isLoggedIn: boolean;
  auth: AuthService;

  constructor(
    public authService: AuthService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.auth = this.authService;
    // restock authService à l'init car on l'utilise dans le template directement

  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect.'
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.name, this.password)
      .subscribe({
        next: isLoggedIn => {
          this.setMessage();
          if(isLoggedIn) {
            this.router.navigate(['/pokemons']);
          } else {
            this.password ='';
            // reinit mdp si erreur
            this.router.navigate(['/login']);
          }
        }
      })
  }
  // quand user soumet le form de connexion, login => afficher un msg tentative de co en cours
  // appel méthode authService pour véirifer si à le droit où non d'accèder aux données, on reçoit un flux contenant un bool
  // message mis à jour en fonction du rst de co

  logout() {
    this.auth.logout;
    this.message = 'Vous êtes déconnecté.'
  }
}
