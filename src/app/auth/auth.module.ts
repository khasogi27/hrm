import { NgModule } from '@angular/core';
import { SharedModule } from '@share/shared.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [AuthService]
})
export class AuthModule { }
