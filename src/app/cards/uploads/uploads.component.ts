import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from './../../services/file-upload.service';


@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  // ecoles;

  constructor(public fileUploadService: FileUploadService, private toastr: ToastrService) { }

    ngOnInit() {
        this.fileUploadService.refreshList();
        // this.fileUploadService.UploadForm.markAsUntouched()
        // console.log(this.fileUploadService.UploadForm);
    }

    onSelectedExcelFile(event) {
        // Verification du fichier comme condition
      if (event.target.files.length > 0) {
        const excelFile = event.target.files[0];
        this.fileUploadService.UploadForm.get('excelFile').setValue(excelFile);
        // console.log(this.fileUploadService.UploadForm.get('excelFile').value);
        // console.log(excelFile);
      }
    }

    onSelectedLogoFile(event) {
        // Verification du fichier comme condition
        if (event.target.files.length > 0) {
            const iepLogo = event.target.files[0];
            this.fileUploadService.UploadForm.get('iepLogo').setValue(iepLogo);
            // console.log(this.fileUploadService.UploadForm.get('iepLogo').value);
        }
    }

    onSubmit() {
        if (this.fileUploadService.UploadForm.controls.ecoleDren.status === 'VALID') {
            if (this.fileUploadService.UploadForm.controls.ecoleInspection.status === 'VALID') {
                if (this.fileUploadService.UploadForm.controls.iepLogo.status === 'VALID') {
                    if (this.fileUploadService.UploadForm.controls.ecoleNom.status === 'VALID') {
                        if (this.fileUploadService.UploadForm.controls.ecoleCode.status === 'VALID') {
                            if (this.fileUploadService.UploadForm.controls.excelFile.status === 'VALID') {

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
                                        this.fileUploadService.refresh();
                                        this.fileUploadService.refreshList();
                                        this.fileUploadService.UploadForm.markAsUntouched();
                                        this.toastr.success(done.msg, 'Chargement Fichier...');
                                    } else {
                                        if (done.error.errors[0].type === 'unique violation') {
                                            // tslint:disable-next-line: max-line-length
                                            this.toastr.error('Matricule ' + done.error.errors[0].value + ' deja enregistré', 'Erreur dans le Fichier Excel');
                                        }
                                        // console.log(done.error[0]);
                                    }
                                });

                            } else { this.toastr.error('Fichier Excel Invalide', 'Formulaire Incorrect'); }
                        } else { this.toastr.error('Veuillez Renseigner Le Code De l\'Ecole', 'Formulaire Incorrect'); }
                    } else { this.toastr.error('Veuillez Renseigner Le Nom De l\'Ecole', 'Formulaire Incorrect'); }
                } else { this.toastr.error('Fichier Image Invalide', 'Formulaire Incorrect'); }
            } else { this.toastr.error('Veuillez Renseigner  l\'Inspection', 'Formulaire Incorrect'); }
        } else { this.toastr.error('Veuillez Renseigner La DREN', 'Formulaire Incorrect'); }

        console.log(this.fileUploadService.UploadForm);
    }

    onDelete(ecoleId) {
        this.fileUploadService.deleteCards(ecoleId).subscribe(result => {
            let done: any = { success: '', msg: ''};
            done = result;
            if (done.success === true) {
                this.fileUploadService.refreshList();
                this.toastr.info(done.msg, 'Suppression effectuée');
            }
        });
    }

    onGenerate(ecoleId) {
        console.log('Cartes générées... ' + ecoleId);
    }

}
