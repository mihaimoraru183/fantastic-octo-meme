import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProduseComponent } from './produse/produse.component';
import { AppleComponent } from './apple/apple.component';
import { SamsungComponent } from './samsung/samsung.component';
import { HuaweiComponent } from './huawei/huawei.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { AllviewComponent } from './allview/allview.component';
import { SonyComponent } from './sony/sony.component';
import { NokiaComponent } from './nokia/nokia.component';
import { ContacteComponent } from './contacte/contacte.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProduseComponent,
  },
  {
    path: 'contacts',
    component: ContacteComponent,
  },
  {
    path: 'apple',
    component: AppleComponent,
  },
  {
    path: 'samsung',
    component: SamsungComponent,

  },
  {
    path: 'huawei',
    component: HuaweiComponent,
  },
  {
    path: 'motorola',
    component: MotorolaComponent,
  },
  {
    path: 'xiaomi',
    component: XiaomiComponent,
  },
  {
    path: 'allview',
    component: AllviewComponent,
  },
  {
    path: 'nokia',
    component: NokiaComponent,
  },
  {
    path: 'sony',
    component: SonyComponent,
  },
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
``