import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Field} from '../../models/field.interface';
import {ConfigOptions, FieldConfig} from '../../models/field-config.interface';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'lib-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements  Field, AfterViewInit {


  config: FieldConfig;
  group: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngAfterViewInit(): void {
    if (this.config.optionsApi){
      this.getApiOptions()
        .subscribe((data: ConfigOptions[]) => {
          console.log(data);
          this.config.options = data;
        });
    }
  }

  getApiOptions(): Observable<ConfigOptions[]>{
    return this.http.get<ConfigOptions[]>(this.config.optionsApi);
  }

}
