import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		ScaffoldComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		SharedModule,
		SecurityModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
