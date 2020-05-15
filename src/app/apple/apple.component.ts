import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { DialogroductComponent } from '../dialogs/dialogroduct/dialogroduct.component';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  image1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/16fa6a9aef7ffd6209d5fd9338ffa0b1/iPhone_SE_Black_2-up_US-EN_SCREEN.jpg";
  image1_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_Black_2-up_Hero_Vertical_US-EN_SCREEN.jpg";
  image1_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_Black_2-up_Hero_Horizontal_US-EN_SCREEN.jpg";
  image1_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_Black_Hero_Horizontal_US-EN_SCREEN.jpg";
  title1 = "Telefon APPLE iPhone SE 2, 64GB, Black";
  spec1 = "COD PRODUS: SMTIPSE64BK";
  price1 = "2.399,90";

  image2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Red_2-up_Vertical_US-EN_SCREEN_d64e5a73.jpg";
  image2_1 = "https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple-iPhone-11-PRODUCT-RED-rightimage_284c431f.jpg";
  image2_2 = "https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple-iPhone-11-PRODUCT-RED-leftimage_b47e50cf.jpg";
  image2_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Red_Hero_Rosette_Vertical_US-EN_SCREEN_5c1c66b8.jpg";
  title2 = "Telefon APPLE iPhone 11, 64GB, Product Red";
  spec2 = "COD PRODUS: SMTMWLV2RMA";
  price2 = "3.699,90";


  image3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-SpaceGray_3_a1d3c81c.jpg";
  image3_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-SpaceGray_1bd38b5a.jpg";
  image3_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-SpaceGray_2_cbe75d54.jpg";
  image3_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-SpaceGray_5_d361f30a.jpg";
  title3 = "Telefon APPLE iPhone Xs, 64GB, Space Gray";
  spec3 = "COD PRODUS: SMTMT9E2RMA";
  price3 = "3.499,90";


  image4 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone-11-pro-space-grey_ab880be3.jpg";
  image4_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone-11-pro-max-space-grey_5cabf409.jpg";
  image4_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone-11-pro-space-grey_ab880be3.jpg";
  image4_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Pro_Max_Space_Gray_2-Up_Vertical_US-EN_SCREEN_80179e9c.jpg";
  title4 = "Telefon APPLE iPhone 11 Pro, 64GB, Space Grey";
  spec4 = "COD PRODUS: SMTMWHD2RMA";
  price4 = "5.099,90";


  image5 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Black_2-up_Vertical_US-EN_SCREEN_9a9b2f8e.jpg";
  image5_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Black_Hero_Rosette_Vertical_US-EN_SCREEN2_4b2f8e10.jpg";
  image5_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Black_Hero_Rosette_Vertical_US-EN_SCREEN3_7e958fc5.jpg";
  image5_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Black_Hero_Rosette_Vertical_US-EN_SCREEN_903b7fd5.jpg";
  title5 = "Telefon APPLE iPhone 11, 128GB, Black";
  spec5 = "COD PRODUS: SMTMWM02RMA";
  price5 = "4.099,90";


  image6 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_White_2-up_US-EN_SCREEN.jpg";
  image6_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_White_2-up_Hero_Vertical_US-EN_SCREEN.jpg";
  image6_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_White_2-up_Hero_Horizontal_US-EN_SCREEN.jpg";
  image6_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_SE_White_Hero_Horizontal_US-EN_SCREEN.jpg";
  title6 = "Telefon APPLE iPhone SE 2, 256GB, White";
  spec6 = "COD PRODUS: SMTIPSE256WH";
  price6 = "3.299,90";


  image7 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-Silver_3_5d8a6a0d.jpg";
  image7_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-Silver_49336073.jpg";
  image7_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-Silver_2_4f311bc4.jpg";
  image7_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhoneXs-Silver_5_428f177d.jpg";
  title7 = "Telefon APPLE iPhone Xs, 256GB, Silver";
  spec7 = "COD PRODUS: SMTMT9J2RMA";
  price7 = "5.899,90";


  image8 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone7_2up_matblk_us-en-screen_1.jpg";
  image8_1 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone7_pureangles_matblk_ww-en-screen_1.jpg";
  image8_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone7_pureangles_matblk_ww-en-screen_3_1.jpg";
  image8_3 = "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone7_pureangles_matblk_ww-en-screen_2_1.jpg";
  title8 = "Telefon APPLE iPhone 7, 128GB, 2GB RAM, Black";
  spec8 = "COD PRODUS: SMTMN922RMA";
  price8 = "2.499,90";


  image9 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTMQ6G2RMA-1_7b115758.jpg";
  image9_1 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTMQ6G2RMA-2_642d5808.jpg";
  image9_2 = "https://lcdn.altex.ro/resize/media/catalog/product/i/P/16fa6a9aef7ffd6209d5fd9338ffa0b1/iPhone_SE_Black_2-up_US-EN_SCREEN.jpg";
  image9_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTMQ6G2RMA-3_4e184b92.jpg";
  title9 = "Telefon APPLE iPhone 8, 64GB, 2GB RAM, Silver";
  spec9 = "COD PRODUS: SMTMQ6H2RMA";
  price9 = "2.249,90";

  constructor(public matDialog: MatDialog) { }

  phone1() {
    const userId = "user01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title1,
      spec: this.spec1,
      img1: this.image1,
      img2: this.image1_1,
      img3: this.image1_2,
      img4: this.image1_3,
    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone2() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title2,
      spec: this.spec2,
      img1: this.image2,
      img2: this.image2_1,
      img3: this.image2_2,
      img4: this.image2_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone3() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title3,
      spec: this.spec3,
      img1: this.image3,
      img2: this.image3_1,
      img3: this.image3_2,
      img4: this.image3_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone4() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title4,
      spec: this.spec4,
      img1: this.image4,
      img2: this.image4_1,
      img3: this.image4_2,
      img4: this.image4_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone5() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title5,
      spec: this.spec5,
      img1: this.image5,
      img2: this.image5_1,
      img3: this.image5_2,
      img4: this.image5_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone6() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title6,
      spec: this.spec6,
      img1: this.image6,
      img2: this.image6_1,
      img3: this.image6_2,
      img4: this.image6_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone7() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title7,
      spec: this.spec7,
      img1: this.image7,
      img2: this.image7_1,
      img3: this.image7_2,
      img4: this.image7_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone8() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title2,
      spec: this.spec8,
      img1: this.image8,
      img2: this.image8_1,
      img3: this.image8_2,
      img4: this.image8_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }
  phone9() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = {
      title: this.title9,
      spec: this.spec9,
      img1: this.image9,
      img2: this.image9_1,
      img3: this.image9_2,
      img4: this.image9_3,

    }
    const modalDialog = this.matDialog.open(DialogroductComponent, dialogConfig);
  }


  ngOnInit() {
  }

}
