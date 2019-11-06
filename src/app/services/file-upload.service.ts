import { AppService } from './app.service';
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

  constructor(private appService: AppService, private http: HttpClient, private fb: FormBuilder) { }

    upload(formData) {
        return this.http.post(this.appService.apiUrl + '/upload', formData, {

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
        const url = this.appService.apiUrl + '/ecoles';
        return this.http.get(url).toPromise().then(result => (this.ecoles = result));
    }
}
