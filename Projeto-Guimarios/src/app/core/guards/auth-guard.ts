import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


  constructor(private router: Router, private authService: AuthService) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if(!(this.authService.getCurrentUser())) {
      this.router.navigateByUrl('/login')
      return false
    }

    return true


  }

}
