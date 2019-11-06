import { AppService } from './../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-cards',
  templateUrl: './generate-cards.component.html',
  styleUrls: ['./generate-cards.component.css']
})
export class GenerateCardsComponent implements OnInit {

  constructor(private appService: AppService, private http: HttpClient) { }

  ngOnInit() {
  }

  generate(codeEcole){
    this.http.get(this.appService.apiUrl, codeEcole);
  }

}
