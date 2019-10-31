import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { UploadsComponent } from './uploads/uploads.component';
import { FileUploadService } from './services/file-upload.service';

const routes: Routes = [
    { path: '', component: UploadsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UploadsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
      FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
