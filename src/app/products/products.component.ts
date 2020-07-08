import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { MatDialog } from "@angular/material/dialog";
import { ProductInfoComponent } from "../product-info/product-info.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  info1: string =
    "In a large range of colours. Available as a full width fabric on the roll or by the metre . Also packs of squares in various sizes and quantities. Suitable for Handicraft, Display, Appliqué Work, Soft Toys and Crafts. Also available with a Self Adhesive Backing.";
  info2: string =
    "Faux Fur Rugs: Faux Sheepskin Rugs in various Shades, Safari Animal Skin Rugs, all in a range of shapes & Sizes.";
  info3: string =
    "We offer a comprehensive making up service for Cushion Covers, Bean Bags, Specialist Backdrops for Filming or Photography, etc., etc. We can use your own materials or you can choose from our range of fabrics.  Custom Filling Service for Customers made up Cushions or Bean Bags. Refilling service for old and worn out sofa cushions.";
  info4: string =
    "ushion Pads in all shapes & sizes, ranging from Small Scatter Cushions, Box  Cushions, Pillows, Sofa Seats & Backs, Bolster Cushions, V-Neck, Specialist Cushions for Orthopaedic or Specialist Medical Use. Filled with high quality non allergenic Hollowfibre or Feather Filled according to your specification.";

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: "Rugs",
            cols: 1,
            rows: 1,
            urls: "./assets/static/images/image1.jpg",
            data: this.info1,
          },
          {
            title: "Faux Fur",
            cols: 1,
            rows: 1,
            urls: "./assets/static/images/image2.jpg",
            data: this.info2,
          },
          {
            title: "Home Textiles",
            cols: 1,
            rows: 1,
            urls: "./assets/static/images/image4.jpg",
            data: this.info3,
          },
          {
            title: "Cushion",
            cols: 1,
            rows: 1,
            urls: "./assets/static/images/image3.jpg",
            data: this.info4,
          },
        ];
      }

      return [
        {
          title: "Rugs",
          cols: 2,
          rows: 1,
          urls: "./assets/static/images/image1.jpg",
          data: this.info1,
        },
        {
          title: "Faux Fur",
          cols: 1,
          rows: 1,
          urls: "./assets/static/images/image2.jpg",
          data: this.info2,
        },
        {
          title: "Home Textiles",
          cols: 1,
          rows: 2,
          urls: "./assets/static/images/image4.jpg",
          data: this.info3,
        },
        {
          title: "Cushion",
          cols: 1,
          rows: 1,
          urls: "./assets/static/images/image3.jpg",
          data: this.info4,
        },
      ];
    })
  );

  openDialog(info) {
    let dialogRef = this.matDialog.open(ProductInfoComponent, {
      height: "400px",
      width: "600px",
      data: { data: info },
    });
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matDialog: MatDialog
  ) {}
}
