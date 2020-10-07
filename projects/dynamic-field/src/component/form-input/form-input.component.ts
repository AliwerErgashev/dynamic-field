import { Component, OnInit } from '@angular/core';
import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit, Field {

  constructor() { }

  config: FieldConfig;
  group: FormGroup;

  ngOnInit(): void {
  }

}
