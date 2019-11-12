import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() myLabel = '';
  counter = 0;

  constructor() {}
  value = ''; //

  onChange: any = () => {};
  onTouch: any = () => {};

  setValue(val) {
    if (val !== undefined && this.value !== val) {
      this.value = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  onInput(value: string) {
    this.counter = value.length;
    this.value = value;
    this.onTouch();
    this.onChange(this.value + 'h');
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
      this.counter = value.length;
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
