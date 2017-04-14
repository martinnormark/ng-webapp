import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ModalComponent } from './ui/modal/modal.component';
import { PopoverComponent } from './ui/popover/popover.component';
import { CardComponent } from './ui/card/card.component';
import { PanelComponent } from './ui/panel/panel.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [SidebarComponent, NavbarComponent, ModalComponent, PopoverComponent, CardComponent, PanelComponent],
	exports: [CommonModule, SidebarComponent, NavbarComponent, ModalComponent, PopoverComponent, CardComponent, PanelComponent]
})
export class SharedModule { }
