import { Component, OnInit } from '@angular/core';
import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit, Field {

  constructor() { }

  config: FieldConfig;
  group: FormGroup;

  ngOnInit(): void {
  }

}
