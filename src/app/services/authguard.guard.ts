import { Injectable } from '@angular/core';
import { UserService} from './user.service'
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root',
  
})
export class AuthGuard implements CanActivate {
  constructor(private userService : UserService,private router: Router) { }
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if (!this.userService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
      }
    return true;
  }
  
}

