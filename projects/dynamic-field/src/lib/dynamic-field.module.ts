import { NgModule } from '@angular/core';
import { DynamicFieldComponent } from './dynamic-field.component';
import {FormButtonComponent} from '../component/form-button/form-button.component';
import {FormDateComponent} from '../component/form-date/form-date.component';
import {FormInputComponent} from '../component/form-input/form-input.component';
import {FormSelectComponent} from '../component/form-select/form-select.component';
import {HttpClientModule} from '@angular/common/http';
import {DynamicFieldDirective} from '../component/dynamic-field.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    FormButtonComponent,
    FormDateComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFieldComponent,
    DynamicFieldDirective,

  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [DynamicFieldComponent],
})
export class DynamicFieldModule { }
