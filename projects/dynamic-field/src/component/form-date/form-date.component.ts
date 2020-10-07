import { Component, OnInit } from '@angular/core';
import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.css']
})
export class FormDateComponent implements OnInit, Field {

  constructor() { }

  config: FieldConfig;
  group: FormGroup;

  ngOnInit(): void {
  }

}
