import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  // var qui dit si user est co ou non, par défaut à false, déco. Il doit prouver qu'il a les bons id
  redirectUrl: string;
  // si user demande à accèder à la liste des pokemons ou autre, et qu'il n'a pas le droit demande de co, et si co ok redir au bon endroit sur la page

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == "pikachu" && password =='pikachu');
    // recup rst pour savoir si user auth ou non, puis délègue dans le tps d'une scd et ensuite mise à jour ppt isLoggedIn
    return of(isLoggedIn).pipe
      (delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    // simuler délai serveur
      );
  }

  logout() {
    this.isLoggedIn = false;
  }
  // info reste appli au niveau authService user non co
}
