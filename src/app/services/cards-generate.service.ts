import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsGenerateService {

  constructor(private appService: AppService, private http: HttpClient) { }

  generateCards() {

  }

  deleteCards(ecoleId) {
    const url = this.appService.apiUrl + '/cards/' + ecoleId;
    return this.http.delete(url, {
    });
}
}
