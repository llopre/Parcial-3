import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './layout/message-dialog/message-dialog.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMessageService } from './services/app-message.service';
import { SplashComponent } from './layout/splash/splash.component';



@NgModule({
  declarations: [
    MessageDialogComponent,
    SplashComponent
  ],
  imports: [ 
    CommonModule,
    NgbModalModule
  ],
  providers:[AppMessageService]
})
export class CoreModule { }
