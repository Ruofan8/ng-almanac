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
import {DialogDataExample, DialogDataExampleDialog} from './dashboard/dialog-data-example';
// import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SafePipe,
    DialogDataExample,
    DialogDataExampleDialog,
    // MatNativeDateModule
  ],
  entryComponents: [DialogDataExample, DialogDataExampleDialog],
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
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
