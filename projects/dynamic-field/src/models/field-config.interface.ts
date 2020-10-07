import {ValidatorFn} from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  inputType?: string;
  name: string;
  options?: ConfigOptions[];
  optionsApi?: string;
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
}

export interface ConfigOptions {
  id: string;
  name: string;
}
