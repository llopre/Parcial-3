import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './layout/message-dialog/message-dialog.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMessageService } from './services/app-message.service';



@NgModule({
  declarations: [
    MessageDialogComponent
  ],
  imports: [ 
    CommonModule,
    NgbModalModule
  ],
  providers:[AppMessageService]
})
export class CoreModule { }
