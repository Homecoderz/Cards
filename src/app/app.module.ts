import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { FileUploadService } from './services/file-upload.service';
import { CardsGenerateService } from './services/cards-generate.service';
import { CardsComponent } from './cards/cards.component';
import { UploadsComponent } from './cards/uploads/uploads.component';
import { GenerateCardsComponent } from './cards/generate-cards/generate-cards.component';

const routes: Routes = [
    { path: '', component: UploadsComponent },
    { path: 'cards', component: CardsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    UploadsComponent,
    GenerateCardsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
      AppService,
      FileUploadService,
      CardsGenerateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
