import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsGenerateService {

    eleves

  constructor(private appService: AppService, private http: HttpClient) { }

  getEleves(codeEcole) {
    return this.http.get(this.appService.apiUrl + '/cards/generate/' + codeEcole).toPromise().then(result => ( this.eleves = result ));
  }

  deleteCards(ecoleId) {
    const url = this.appService.apiUrl + '/cards/' + ecoleId;
    return this.http.delete(url, {
    });
  }
}
