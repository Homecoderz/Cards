import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly apiUrl = 'http://localhost:3000/api';

  constructor() { }
}
