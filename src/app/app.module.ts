import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { SwiperModule } from 'swiper/angular';
import { MainSwiperComponent } from './components/main-swiper/main-swiper.component';
import {RouterModule} from '@angular/router';
import { TopLineComponent } from './components/top-line/top-line.component';
import {ShareModule} from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainSwiperComponent,
    TopLineComponent
  ],
    imports: [
        BrowserModule,
        SwiperModule,
        RouterModule.forRoot([
            {path: '', component: AppComponent},
        ], {scrollPositionRestoration: 'top', useHash: true}),
        ShareModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
