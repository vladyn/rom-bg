import {NgModule} from '@angular/core';
// import {http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {BodyComponent} from './body';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    BodyComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
