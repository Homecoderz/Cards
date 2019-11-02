import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

    UploadForm: FormGroup = this.fb.group({
            ecoleDren: ['', Validators.required],
            ecoleInspection: ['', Validators.required],
            iepLogo: ['', Validators.required],
            anneeScolaire: ['', Validators.required],
            ecoleCode: ['', Validators.required],
            ecoleNom: ['', Validators.required],
            excelFile: ['', Validators.required]
        });

    public ecoles;
    readonly apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private fb: FormBuilder) { }

    upload(formData) {
        return this.http.post(this.apiUrl + '/upload', formData, {

        });
    }

    refresh() {
        this.UploadForm.setValue({
            ecoleDren: '',
            ecoleInspection: '',
            iepLogo: '',
            anneeScolaire: '',
            ecoleNom: '',
            ecoleCode: '',
            excelFile: '',
        });
    }

    refreshList() {
        const url = this.apiUrl + '/ecoles';
        return this.http.get(url).toPromise().then(result => (this.ecoles = result));
    }

    deleteCards(ecoleId) {
        const url = this.apiUrl + '/cards/' + ecoleId;
        return this.http.delete(url, {
        });
    }

    generateCards() {

    }


}
