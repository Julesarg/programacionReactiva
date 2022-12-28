import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ExampleService2Service } from '../../../services/example-service-2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  public searchControl = new FormControl('')
  public exampleForm = new FormGroup({
    search: this.searchControl,
  })
  constructor(public ExampleService2Service: ExampleService2Service) {

    this.searchControl.valueChanges
      .pipe(debounceTime(500)).subscribe((value) => {
        value && this.ExampleService2Service.searchIn(value).subscribe(console.log)
      })
  }
}

