import { Component, OnInit } from '@angular/core';
import { DialogroductComponent } from '../dialogs/dialogroduct/dialogroduct.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.scss']
})
export class SamsungComponent implements OnInit {
  image1 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SM_F900_GalaxyFold_Front115_Black_f341a0f9.jpg";
  image1_1 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SM_F900_GalaxyFold_Front_Black_c2151cb5.jpg";
  image1_2 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SM_F900_GalaxyFold_OpenBack_Black_ff1ce9a6.jpg";
  image1_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SM_F900_GalaxyFold_BackL30_Black_fd15d342.jpg";
  title1 = "Telefon SAMSUNG Galaxy Fold, 512GB, 12GB RAM, Dual SIM, Cosmos Black";
  spec1 = "COD PRODUS: SMTIPSE64BK";
  price1 = "8.299,90";


  image2 = "https://lcdn.altex.ro/resize/media/catalog/product/G/a/2bd48d28d1c32adea0e55139a4e6434a/Galaxy-Z-Flip_black_5_84424307.jpg";
  image2_1 = "https://lcdn.altex.ro/resize/media/catalog/product/G/a/2bd48d28d1c32adea0e55139a4e6434a/Galaxy-Z-Flip_purple_1_b820884a.jpg";
  image2_2 = "https://lcdn.altex.ro/resize/media/catalog/product/G/a/2bd48d28d1c32adea0e55139a4e6434a/Galaxy-Z-Flip_purple_7_984a90b1.jpg";
  image2_3 = "https://lcdn.altex.ro/resize/media/catalog/product/G/a/2bd48d28d1c32adea0e55139a4e6434a/Galaxy-Z-Flip_purple_9_36e41ca2.jpg";
  title2 = "Telefon SAMSUNG Galaxy Z Flip, 256GB, 8GB RAM, Dual SIM, Mirror Black";
  spec2 = "COD PRODUS: SMTMWLV2RMA";
  price2 = "6.499,90";


  image3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTG975FZWD_4_87487425.jpg";
  image3_1 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTG973FZWD_3_abb8d04f.jpg";
  image3_2 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTG973FZWD_2_36068e24.jpg";
  image3_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTG973FZWD_5_c47ffb87.jpg";
  title3 = "Telefon SAMSUNG Galaxy S10 Plus, 128GB, 8GB RAM, Dual SIM, Prism White";
  spec3 = "COD PRODUS: SMTMT9E2RMA";
  price3 = "3.499,90";


  image4 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Cosmic-gray_4_9f88ec87.jpg";
  image4_1 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Cosmic-gray_3_46b3d73b.jpg";
  image4_2 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Cosmic-gray_2_ca97f3aa.jpg";
  image4_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Cosmic-gray_5_5568f8f3.jpg";
  title4 = "Telefon SAMSUNG Galaxy S20 Ultra, 128GB, 12GB RAM, Dual SIM, 5G, Cosmic Gray";
  spec4 = "COD PRODUS: SMTMWHD2RMA";
  price4 = "6.199,90";


  image5 = "https://lcdn.altex.ro/resize/media/catalog/product/N/o/2bd48d28d1c32adea0e55139a4e6434a/Note10__back_aura_glow_2_41cefbee.jpg";
  image5_1 = "https://lcdn.altex.ro/resize/media/catalog/product/N/o/2bd48d28d1c32adea0e55139a4e6434a/Note10__back_aura_glow_968c97cf.jpg";
  image5_2 = "https://lcdn.altex.ro/resize/media/catalog/product/N/o/2bd48d28d1c32adea0e55139a4e6434a/Note10__a6959e39.jpg";
  image5_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTN975FZSD_9_654addb5.jpg";
  title5 = "Telefon SAMSUNG Galaxy Note 10+, 6.8', 256GB, 12GB RAM, Single SIM, 5G, Aura Glow";
  spec5 = "COD PRODUS: SMTMWM02RMA";
  price5 = "4.099,90";


  image6 = "https://lcdn.altex.ro/resize/media/catalog/product/N/o/2bd48d28d1c32adea0e55139a4e6434a/Note10__black_2_a483b91d.jpg";
  image6_1 = "https://lcdn.altex.ro/resize/media/catalog/product/N/o/2bd48d28d1c32adea0e55139a4e6434a/Note10__black_90b8b748.jpg";
  image6_2 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTN975FZKD_9_2c57cd18.jpg";
  image6_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMTN975FZKD_11_5fec4bd7.jpg";
  title6 = "Telefon SAMSUNG Galaxy Note 10+, 6.8', 256GB, 12GB RAM, Dual SIM, 4G, Aura Black";
  spec6 = "COD PRODUS: SMTIPSE256WH";
  price6 = "4.381,90";


  image7 = "https://lcdn.altex.ro/resize/media/catalog/product/S/1/2bd48d28d1c32adea0e55139a4e6434a/S10-Lite-black_5_d924025d.jpg";
  image7_1 = " https://lcdn.altex.ro/resize/media/catalog/product/S/1/2bd48d28d1c32adea0e55139a4e6434a/S10-Lite-white_46f554d1.jpg";
  image7_2 = "https://lcdn.altex.ro/resize/media/catalog/product/S/1/2bd48d28d1c32adea0e55139a4e6434a/S10-Lite-white_6_c566748d.jpg";
  image7_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/1/2bd48d28d1c32adea0e55139a4e6434a/S10-Lite-white_5_f6167405.jpg";
  title7 = "Telefon SAMSUNG Galaxy S10 Lite, 128GB, 8GB RAM, Dual SIM, Prism Black";
  spec7 = "COD PRODUS: SMTMT9J2RMA";
  price7 = "2.599,90";


  image8 = "https://lcdn.altex.ro/resize/media/catalog/product/A/7/2bd48d28d1c32adea0e55139a4e6434a/A71-black_2_277da63f.jpg";
  image8_1 = "https://lcdn.altex.ro/resize/media/catalog/product/A/7/2bd48d28d1c32adea0e55139a4e6434a/A71-Blue_4_42c4767a.jpg";
  image8_2 = "https://lcdn.altex.ro/resize/media/catalog/product/A/7/2bd48d28d1c32adea0e55139a4e6434a/A71-Blue_5_500ed147.jpg";
  image8_3 = "https://lcdn.altex.ro/resize/media/catalog/product/A/7/2bd48d28d1c32adea0e55139a4e6434a/A71-Blue_2_696fe77b.jpg";
  title8 = "Telefon SAMSUNG Galaxy A71, 128GB, 6GB RAM, Dual SIM, Prism Crush Black";
  spec8 = "COD PRODUS: SMTMN922RMA";
  price8 = "1.869,90";


  image9 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Plus-Cosmic-Gray_4_5e17e795.jpg";
  image9_1 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Plus-Cloud-Blue_3_bee44c2f.jpg";
  image9_2 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Plus-Cloud-Blue_5_0124f8ee.jpg";
  image9_3 = "https://lcdn.altex.ro/resize/media/catalog/product/S/2/2bd48d28d1c32adea0e55139a4e6434a/S20-Plus-Cloud-Blue_6_0a55e77d.jpg";
  title9 = "Telefon SAMSUNG Galaxy S20+, 128GB, 12GB RAM, Dual SIM, 5G, Cosmic Gray";
  spec9 = "COD PRODUS: SMTMQ6H2RMA";
  price9 = "4.999,90";




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
