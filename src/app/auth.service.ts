import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  // var qui dit si user est co ou non, par défaut à false, déco. Il doit prouver qu'il a les bons id
  redirectUrl: string;
  // si user demande à accèder à la liste des pokemons ou autre, et qu'il n'a pas le droit demande de co, et si co ok redir au bon endroit sur la page

  login(name: string, password: string): Observable<boolean> {

  }

  logout() {
    this.isLoggedIn = false;
  }
  // info reste appli au niveau authService user non co
}
