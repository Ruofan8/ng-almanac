import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,
  MatGridListModule, MatCardModule,
  MatMenuModule, MatIconModule, MatFormFieldModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SafePipe } from './pipes/safe.pipe';
import { DialogComponent, DialogModal } from './dashboard/dialog/dialog.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LogModule } from './log/log.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SafePipe,
    DialogComponent,
    DialogModal
  ],
  entryComponents: [DialogComponent, DialogModal],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    LogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
