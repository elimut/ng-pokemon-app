import {inject } from '@angular/core';
import { CanActivateFn, Router }
    from '@angular/router';
import { AuthService } from './auth.service';
  
export class AuthGuard{
  
  constructor (
    public authService: AuthService,
    public router: Router
  ) {}
}
  export const authGuard: CanActivateFn =  (route, state): boolean => {
    // console.log('ok');
    // return inject(AuthGuard).canActivate(route,state);
    // obtention instance de AuthGuard et appel de sa méthode
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isLoggedIn) {
      return true;
      // auto accès autre page car loggué
    }
    
    router.navigate(['/login']);
    return false;
    // si non loggé redir page de connexion
  }
// angular va regarder sur la route en question si canActivate renvoie true ou false. si true redir ok sinon bloque. Le guard doit être attaché à une route pour autorisé l'accès ou non


// export const authGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot, 
//   state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
//     let url: string = state.url;
//     // recup url actuelle
//     const authService: AuthService = new AuthService();
//     // injection service authService pour verif user co
//     if (authService.isLoggedIn) {
//       return true; // L'utilisateur est connecté, autorise l'accès à la route
//     } else {
//       // L'utilisateur n'est pas connecté, enregistrez l'URL actuelle pour la redirection après la connexion
//       authService.redirectUrl = url;

//        // Vous pouvez également rediriger l'utilisateur vers une autre page ici, par exemple la page de connexion
//     const router: Router = new Router(); // Remplacez par l'injection réelle du service Router
//     router.navigate(['/login']);
    
//     return false; // Bloque l'accès à la route
//   }
// }
 

// route: ActivatedRouteSnapshot : Représente la route qui sera activée.
// state: RouterStateSnapshot : Représente l'état actuel du routeur au moment de la navigation.
// Observable<boolean | UrlTree> : Cela signifie que la fonction peut retourner un objet de type Observable contenant soit un boolean (vrai ou faux) ou un objet de type UrlTree. Les UrlTree sont utilisés pour effectuer des redirections lorsqu'on souhaite que la navigation se fasse vers une autre route.
// Promise<boolean | UrlTree> : Cela signifie que la fonction peut retourner une promesse (Promise) contenant soit un boolean ou un objet de type UrlTree.
// boolean : Cela signifie que la fonction peut retourner simplement un boolean, soit true ou false.
// UrlTree : Cela signifie que la fonction peut retourner un objet de type UrlTree, qui est utilisé pour effectuer des redirections dans Angular.
// En résumé, cette déclaration de type indique que la fonction du garde peut retourner soit un Observable contenant un boolean ou un UrlTree, soit une Promise contenant un boolean ou un UrlTree, soit directement un boolean ou un UrlTree.
// Cela permet à la fonction de garde d'utiliser différentes approches pour gérer la navigation en fonction des besoins spécifiques de l'application, comme renvoyer une valeur synchrone (boolean), une valeur asynchrone (Observable ou Promise) ou effectuer des redirections (UrlTree).