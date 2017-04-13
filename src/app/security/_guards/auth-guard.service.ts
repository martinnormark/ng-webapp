import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private _authService: AuthenticationService, private _router: Router) { }

	canActivate() {
		if (!this._authService.isLoggedIn()) {
			this._router.navigate(['/login']);

			return false;
		}

		return true;
	}

}
