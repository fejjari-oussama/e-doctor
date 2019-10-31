import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewsComponents } from './components';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../_material/material.module';
import { XunkCalendarModule } from 'xunk-calendar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    XunkCalendarModule,
    TextFieldModule,
    SharedModule,
  ],
  exports: [
    ...ViewsComponents
  ],
  declarations: [
    ...ViewsComponents
  ],
  providers: [

  ]
})
export class ViewsModule { }
