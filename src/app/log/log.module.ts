import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './component/log.component';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    LogComponent
  ]
})
export class LogModule { }
