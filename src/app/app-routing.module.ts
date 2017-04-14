import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './security/_guards/auth-guard.service';
import { LoginComponent } from './security/login/login.component';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
	path: '',
	component: ScaffoldComponent,
	canActivate: [AuthGuard],
	children: [
		{
			path: '',
			children: [
				{ path: '', component: DashboardComponent }
			]
		}
	]
},
{
	path: 'login',
	component: LoginComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
