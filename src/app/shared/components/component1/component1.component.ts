import { Component, OnDestroy } from '@angular/core';
import { ExampleServiceService } from '../../../services/example-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  constructor(public exampleServiceService: ExampleServiceService) {
    this.exampleServiceService.text$.subscribe()
  }
}
