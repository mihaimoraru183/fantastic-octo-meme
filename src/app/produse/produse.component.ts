import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.scss']
})
export class ProduseComponent implements OnInit {

  title1 = "APPLE"
  title2 = "SAMSUNG"
  title3 = "HUAWEI"
  title4 = "MOTOROLA"
  title5 = "XIAOMI"
  title6 = "ALLVIEW"
  title7 = "NOKIA"
  title8 = "SONY"

  image1 = 'https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/iPhone_11_Pro_Max_Space_Gray_2-Up_Vertical_US-EN_SCREEN_07f4c8d1_a680d67e.jpg'
  image2 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTN975FZKD_9_2c57cd18_a16e3ecd.jpg"
  image3 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/Huawei_p30pro_Black_7da62652_f7b76fae.jpg"
  image4 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/Motorola-one-Zoom_EU_Electric-Gray_SIDEBYSIDE_Batwing_36f6b8a7.jpg"
  image5 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/Mi-9T-Pro_4_8a7dabbd_c1a37e4f.jpg"
  image6 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTX6XTREMEPR_5c2fea93_fb045925.jpg"
  image7 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTNO9DSMB_edf1d525_dd271479.jpg"
  image8 = "https://lcdn.altex.ro/resize/media/catalog/category//16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTSONYX10PLBK_4_6b794d50_7129fe28.jpg"
  constructor() { }

  ngOnInit() {
  }

}
