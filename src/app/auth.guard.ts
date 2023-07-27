import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot }
    from '@angular/router';
  
@Injectable()

class AuthGuard {

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): boolean {
      return true;
    }
  }

  export const authGuard: CanActivateFn =  ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    console.log('ok');
    // return inject(AuthGuard).canActivate(route,state);
    // obtention instance de AuthGuard et appel de sa méthode
    return true;
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