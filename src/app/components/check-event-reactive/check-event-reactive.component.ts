import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-event-reactive',
  templateUrl: './check-event-reactive.component.html',
  styleUrls: ['./check-event-reactive.component.css']
})
export class CheckEventReactiveComponent {

  form: FormGroup;
  websiteList: any = [
    { id: 1, name: 'Google.com' },
    { id: 2, name: 'Angular.com' },
    { id: 3, name: 'Tutsmake.com' },
    { id: 1, name: 'Google.com' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    })
  }

  onCheckboxChange(e: any) {
    const website: FormArray = this.form.get('website') as FormArray;

    if (e.target.checked) {
      if (this.form.value.website.includes(e.target.value)) {
        e.target.checked = false;
        const index = website.controls.findIndex(x => x.value === e.target.value);
        website.removeAt(index);
      }
      website.push(new FormControl(e.target.value));
      console.log(website);
    } else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      console.log(index);

      website.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value);
  }

}
