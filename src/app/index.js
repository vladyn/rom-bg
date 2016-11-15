import {NgModule, provide} from '@angular/core';
import {http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {SomeComponent} from './some';

import {TextsModule} from './texts';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule,
    TextsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    SomeComponent
  ],
  bootstrap: [RootComponent, provide(http, {useClass: http})]
})
export class AppModule {}
