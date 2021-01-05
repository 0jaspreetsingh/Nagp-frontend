// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApplicantAuthguardService {

//   constructor() { }
// }
import { AuthenticateAdminService } from './authenticate-admin.service';

import  {  Injectable  }  from  '@angular/core';
import  {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router  }  from  '@angular/router';
import  {  Observable  }  from  'rxjs';

@Injectable()
export  class ApplicantAuthguardService  implements  CanActivate {

  constructor(private  userService: AuthenticateAdminService,  private  router:  Router) { }

  canActivate(route:  ActivatedRouteSnapshot,  state:  RouterStateSnapshot):  boolean  {
    if  (this.userService.applicantLogin) {
      return  true;
    }
    else  {
      alert('You are not allowed to visit this page...\nYou are redirecting back to Login page')
      this.router.navigate(['']);
    }
  }
} 