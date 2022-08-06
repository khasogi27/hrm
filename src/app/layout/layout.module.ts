import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainAuthComponent } from './main-auth/main-auth.component';
import { SharedModule } from '@share/shared.module';

const COMPONENTS: any[] = [
  MainLayoutComponent,
  HeaderComponent,
  SidenavComponent,
  MainAuthComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule]
})
export class LayoutModule { }
