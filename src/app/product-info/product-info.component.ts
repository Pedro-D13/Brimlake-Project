import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface DialogData {
  title: string;
  cols: number;
  rows: number;
  urls: string;
  data: string;
}

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
})
export class ProductInfoComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
