import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { FileUploadService } from './../services/file-upload.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  ecoles;

  constructor(public fileUploadService: FileUploadService, private toastr: ToastrService) { }

    ngOnInit() {
        this.fileUploadService.refreshList();
    }

    onSelectedExcelFile(event) {
      if (event.target.files.length > 0) {
        const excelFile = event.target.files[0];
        this.fileUploadService.UploadForm.get('excelFile').setValue(excelFile);
        // console.log(excelFile);
        // console.log(this.fileUploadService.ecoles);
      }
    }

    onSelectedLogoFile(event) {
        if (event.target.files.length > 0) {
            const iepLogo = event.target.files[0];
            this.fileUploadService.UploadForm.get('iepLogo').setValue(iepLogo);
            // console.log(iepLogo);
            // console.log(this.fileUploadService.ecoles);
        }
    }


    onSubmit() {
        // console.log(this.fileUploadService.UploadForm);
        if (this.fileUploadService.UploadForm.status === 'VALID') {
            const formData = new FormData();
            formData.append('ecoleDren', this.fileUploadService.UploadForm.get('ecoleDren').value);
            formData.append('ecoleInspection', this.fileUploadService.UploadForm.get('ecoleInspection').value);
            formData.append('iepLogo', this.fileUploadService.UploadForm.get('iepLogo').value);
            formData.append('anneeScolaire', this.fileUploadService.UploadForm.get('anneeScolaire').value);
            formData.append('ecoleNom', this.fileUploadService.UploadForm.get('ecoleNom').value);
            formData.append('ecoleCode', this.fileUploadService.UploadForm.get('ecoleCode').value);
            formData.append('excelFile', this.fileUploadService.UploadForm.get('excelFile').value);

            this.fileUploadService.upload(formData).subscribe(result => {
                let done: any = { success: '', msg: '', error: '' };
                done = result;
                if (done.success === true) {
                    // this.fileUploadService.UploadForm.get('excelFile').setValue('');
                    this.fileUploadService.refreshList();
                    this.toastr.success(done.msg, 'Chargement de Fichier');
                } else {
                    this.toastr.error(done.error.errors[0].message, 'Erreur de chargement...');
                }
            });
        }
    }

    onDelete(ecoleId) {
        this.fileUploadService.deleteCards(ecoleId).subscribe(result => {
            let done: any = { success: '', msg: ''};
            done = result;
            if (done.success === true) {
                this.fileUploadService.refreshList();
                this.toastr.success(done.msg, 'Suppression effectuée');
            }
        });
    }

    onGenerate(ecoleId){
        console.log('Cartes générées... ' + ecoleId);
    }

}
