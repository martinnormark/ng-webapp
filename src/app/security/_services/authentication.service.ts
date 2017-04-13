import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

	constructor() { }

	isLoggedIn() {
		return true;
	}
}
