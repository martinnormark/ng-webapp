import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_guards/auth-guard.service';
import { AuthenticationService } from './_services/authentication.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [LoginComponent],
	providers: [AuthGuard, AuthenticationService]
})
export class SecurityModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SecurityModule,
			providers: []
		};
	}
}
