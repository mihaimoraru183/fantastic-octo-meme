import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalActionsService } from 'src/app/services/modal-actions.service';

@Component({
  selector: 'app-dialogroduct',
  templateUrl: './dialogroduct.component.html',
  styleUrls: ['./dialogroduct.component.scss']
})
export class DialogroductComponent implements OnInit {

    constructor(
      public dialogRef: MatDialogRef<DialogroductComponent>,
      @Inject(MAT_DIALOG_DATA) private modalData: any,
      private modalService: ModalActionsService
    ) {}
  
    ngOnInit() { }
  
    actionFunction() {
      this.modalService.modalAction(this.modalData);
      this.closeModal();
    }
  
    closeModal() {
      this.dialogRef.close();
    }
}
