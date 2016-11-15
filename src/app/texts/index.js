import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {TextsComponent} from './textsComponent';
import {TextService} from './textService';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    TextsComponent,
    TextService
  ],
  providers: [
    TextService
  ],
  exports: [
    TextsComponent
  ]
})
export class TextsModule {}
