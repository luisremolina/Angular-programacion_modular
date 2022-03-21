import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MODULOS
import { WebsideRoutingModule } from './webside-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule} from 'ngx-quicklink';

// COMPONENTES
import { HomeComponent } from './pages/home/home.component';

import { MycartComponent } from './pages/mycart/mycart.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsideModule { }
