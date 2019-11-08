import { AppService } from './../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { CardsGenerateService } from 'src/app/services/cards-generate.service';

@Component({
  selector: 'app-generate-cards',
  templateUrl: './generate-cards.component.html',
  styleUrls: ['./generate-cards.component.css']
})
export class GenerateCardsComponent implements OnInit {

  constructor(public cardsGenerateService: CardsGenerateService,  public fileUploadService: FileUploadService, private http: HttpClient) { }

  ngOnInit() {
  }

  

}
