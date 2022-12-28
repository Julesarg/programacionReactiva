import { Injectable } from '@angular/core';
import { interval, map, Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {
  private text = new Subject<string>()
  public text$ = this.text.asObservable()
  private firstWord: string = 'Hola Mundo'


  constructor() {
    this.text.subscribe((value) => (this.firstWord = value))

    interval(1000).subscribe(
      () => this.firstWord === 'Hola Mundo' ? this.text.next('Chau Mundo') : this.text.next('Hola Mundo')
    )
  }
}
