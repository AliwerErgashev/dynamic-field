import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FieldConfig} from '../models/field-config.interface';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'lib-dynamic-field',
  template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
      (submit)="handleSubmit($event)">
      <ng-container
        *ngFor="let field of config;"
        libDynamicField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  `,
  styleUrls: ['./dynamic-field.component.scss'],

})
export class DynamicFieldComponent implements OnChanges, OnInit {

  @Input()
  config: FieldConfig[] = [];

  @Output()
  submitButton: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get controls(): FieldConfig[] { return this.config.filter(({type}) => type !== 'button'); }
  get changes(): Observable<any> { return this.form.valueChanges; }
  get valid(): boolean { return this.form.valid; }
  get value(): any { return this.form.value; }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createGroup();
  }

  ngOnChanges(): void {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      console.log('controls', controls);
      const configControls = this.controls.map((item) => item.name);
      console.log('configControls:', configControls);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });

    }
  }

  createGroup(): FormGroup {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig): FormControl {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submitButton.emit(this.value);
  }

  setDisabled(name: string, disable: boolean): FieldConfig {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any): void {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }

}
