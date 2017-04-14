import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthGuard]
		});
	});

	it('should ...', inject([AuthGuard], (service: AuthGuardService) => {
		expect(service).toBeTruthy();
	}));
});
